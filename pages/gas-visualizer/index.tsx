import type { GetServerSideProps, NextPage } from 'next';

import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';
import { serialize } from 'next-mdx-remote/serialize';
import { NextSeo } from 'next-seo';
import remarkGfm from 'remark-gfm';

import { fetchGithubAndFormat } from '@/lib/utils';

import BaseLayout from '@/components/layouts/base';
import ContainerLayout from '@/components/layouts/container';
import GasReportLayout from '@/components/pages/gas-visualizer/gas-report';

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

type GasVisualizerPageProps = {
  githubReadme: MDXRemoteSerializeResult<Record<string, unknown>>;
  githubContracts: Record<string, string>;
  githubUrl: string;
};

// -----------------------------------------------------------------------------
// Page
// -----------------------------------------------------------------------------

const GasVisualizerPage: NextPage<GasVisualizerPageProps> = ({
  githubReadme,
  githubContracts,
  githubUrl,
}) => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: 'website',
          locale: 'en_US',
          description: 'gas visualizer',
          url: 'https://polarzero.xyz/gas-visualizer',
          site_name: 'polarzero',
          images: [
            {
              url: 'https://polarzero.xyz/api/og/page?title=Gas%20visualizer&description=Visualizer%20for%20gas%20benchmarks.&path=/gas-visualizer',
              width: 1200,
              height: 630,
              alt: 'polarzero gas-visualizer open-graph image',
            },
          ],
        }}
        twitter={{
          handle: '@0xpolarzero',
        }}
      />

      <BaseLayout subtitle="Gas visualizer" pageSlug="/gas-visualizer" external>
        <ContainerLayout className="relative flex max-w-[100rem] flex-col gap-8 px-0 pt-0">
          <GasReportLayout readme={githubReadme} contracts={githubContracts} repoUrl={githubUrl} />
        </ContainerLayout>
      </BaseLayout>
    </>
  );
};

// -----------------------------------------------------------------------------
// Get server-side props
// -----------------------------------------------------------------------------

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const author = (query.author as string) || '';
  const repo = (query.repo as string) || '';
  const { data, status } = await fetchGithubAndFormat(author, repo);

  if (status !== 200) {
    return {
      notFound: true,
    };
  }

  const url = `https://github.com/${author}/${repo}`;
  const readmeMdx = await serialize(data['readme'], {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });

  const props: GasVisualizerPageProps = {
    githubReadme: readmeMdx,
    githubContracts: data,
    githubUrl: url,
  };

  return { props };
};

export default GasVisualizerPage;
