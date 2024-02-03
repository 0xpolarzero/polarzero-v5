import { type FC, type ReactNode } from 'react';

import { MDXProvider } from '@mdx-js/react';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import { NextSeo } from 'next-seo';

import { SECTIONS } from '@/lib/constants/portfolio';
import { PORTFOLIO_PAGES } from '@/lib/constants/portfolio';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';
import { BugBounty } from '@/lib/types/portfolio';
import type { PageSlug } from '@/lib/types/site';

import BaseLayout from '@/components/layouts/base';
import ContainerLayout from '@/components/layouts/container';
import mdxComponents from '@/components/layouts/mdx-components';
import BlogPostNavBar from '@/components/pages/writing/blog-post/nav-bar';
import BlogPostPageNav from '@/components/pages/writing/blog-post/page-nav';
import { Button } from '@/components/ui';

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

type AuditReportLayoutProps = {
  selected: PageSlug;
  children?: ReactNode;
  slug: string;
};

type AuditOrBounty = BugBounty; // we're not using duration & findings that are only inside Audit

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const AuditReportLayout: FC<AuditReportLayoutProps> = ({ selected, children, slug }) => {
  const items = PORTFOLIO_PAGES as AuditOrBounty[];
  const { protocol, categories, shortDesc, url, platform } =
    items.find((page) => page.slug === slug) || {};
  const category =
    categories?.includes('audit competition') || categories?.includes('solo audit')
      ? 'audit'
      : 'bug bounty';

  const subtitle =
    category === 'audit' ? 'Audit report' : category === 'bug bounty' ? 'Bug bounty writeup' : '';

  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // `md` breakpoint

  const components = mdxComponents(isSmallScreen, url);

  return (
    <>
      <NextSeo
        openGraph={{
          type: 'website',
          locale: 'en_US',
          title: `${protocol}; ${subtitle} - polarzero reports`,
          description: 'Audit reports & bug bounty writeups',
          url: 'https://polarzero.xyz/portfolio',
          site_name: 'polarzero',
          images: [
            {
              url: `https://polarzero.xyz/api/og/blog-post?category=portfolio&title=${protocol}&subtitle=${subtitle}&description=${shortDesc}`,
              width: 1200,
              height: 630,
              alt: 'polarzero portfolio docs open-graph image',
            },
          ],
        }}
      />

      <BaseLayout title={protocol} subtitle={subtitle} pageSlug="/portfolio">
        {/* Note: `pb-6` overrides `pb-4` on small devices. `<BlogPostNavBar />`
            has a `mb-6` when displayed on small screens, so the ``margin''
            above/below the article content is symmetrical. We do this instead
            of `py-6` to correctly position `<BlogPostNavBar />`, as well as the
            article content on small screens. This positioning issue is not
            present on larger screens so we have a breakpoint to reset it. For
            similar reasons, the `x` padding is set to 0 on small devices is set
            to 0. */}
        <ContainerLayout className="relative flex max-w-[90rem] flex-col gap-8 px-0 pt-0">
          {isSmallScreen ? null : (
            <div className="grid grid-cols-2 items-center justify-between space-y-2">
              {/* Title */}
              <h1 className="text-3xl font-semibold tracking-tight text-gray-12">{protocol}</h1>
              {/* Back */}
              <Button
                className="justify-self-end"
                variant="secondary"
                intent="primary"
                href="/portfolio"
                leftIcon={<ChevronLeft />}
              >
                Return to Portfolio
              </Button>
              {/* Subtitle */}
              <h2 className="ml-0 pl-0 text-left text-xl font-medium tracking-tight text-gray-11">
                {subtitle}
              </h2>
              {/* Open external link */}
              <Button
                className="justify-self-end"
                size="md"
                variant="ghost"
                href={url}
                rightIcon={<ExternalLink />}
                newTab
              >
                {/* bug bounty => read on Medium */}
                {/* audit => read on platform if platform, otherwise github */}
                Open report on{' '}
                {category === 'audit' && platform
                  ? platform
                  : category === 'bug bounty'
                  ? 'Medium'
                  : 'GitHub'}
              </Button>
            </div>
          )}

          {/* Post */}
          <div className="relative flex flex-col space-x-0 pb-6 md:flex-row md:space-x-16">
            <BlogPostNavBar
              slug={slug}
              selected={selected}
              sections={SECTIONS[slug]}
              category={category}
            />
            <MDXProvider components={components}>
              {/* Add overflow-hidden for code-blocks (too large) so add px-1 to not hide italics */}
              <article className="prose prose-gray max-w-none grow overflow-hidden px-4 text-justify dark:prose-invert md:px-1">
                {children}
                <hr className="mb-6 mt-6 w-full rounded-full border-gray-6 md:mt-12" />
                <BlogPostPageNav pageSlug={selected} sections={SECTIONS[slug]} />
              </article>
            </MDXProvider>
          </div>
        </ContainerLayout>
      </BaseLayout>
    </>
  );
};

export default AuditReportLayout;
