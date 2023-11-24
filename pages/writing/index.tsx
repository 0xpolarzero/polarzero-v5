import type { NextPage } from 'next';
import Image from 'next/image';

import { ChevronLeft } from 'lucide-react';
import { NextSeo } from 'next-seo';

import BaseLayout from '@/components/layouts/base';
import ContainerLayout from '@/components/layouts/container';
import FeaturedWriting from '@/components/pages/writing/featured-writing';
import FilterWriting from '@/components/pages/writing/filter-writing';
import { Button } from '@/components/ui';

const BlogPage: NextPage = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: 'website',
          locale: 'en_US',
          description: 'writing',
          url: 'https://polarzero.xyz/writing',
          site_name: 'polarzero',
          images: [
            {
              url: 'https://polarzero.xyz/api/og/page?title=Writing&description=Research,%20blog%20posts%20and%20threads.&path=/writing',
              width: 1200,
              height: 630,
              alt: 'polarzero writingopen-graph image',
            },
          ],
        }}
        twitter={{
          handle: '@writing',
        }}
      />

      <BaseLayout subtitle="Writing" pageSlug="/writing">
        <ContainerLayout className="flex flex-col space-y-4">
          {/* <h1 className="text-3xl font-semibold tracking-tight text-gray-12 md:text-4xl">
            Writing
          </h1> */}
          <FilterWriting />
          <FeaturedWriting />
          <Button variant="secondary" intent="primary" href="/" leftIcon={<ChevronLeft />}>
            Return home
          </Button>
        </ContainerLayout>
      </BaseLayout>
    </>
  );
};

export default BlogPage;
