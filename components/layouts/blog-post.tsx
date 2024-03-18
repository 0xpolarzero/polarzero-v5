import { type FC, type ReactNode } from 'react';

import { MDXProvider } from '@mdx-js/react';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import { NextSeo } from 'next-seo';

import { SECTIONS } from '@/lib/constants/blog';
import { WRITING_BLOG_PAGES } from '@/lib/constants/writing';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';
import type { PageSlug } from '@/lib/types/site';

import BaseLayout from '@/components/layouts/base';
import ContainerLayout from '@/components/layouts/container';
import mdxComponents from '@/components/layouts/mdx-components';
import BlogPostNavBar from '@/components/pages/blog-post/nav-bar';
import BlogPostPageNav from '@/components/pages/blog-post/page-nav';
import { Button } from '@/components/ui';

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

type BlogPostLayoutProps = {
  selected: PageSlug;
  children?: ReactNode;
  slug: string;
};

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const BlogPostLayout: FC<BlogPostLayoutProps> = ({ selected, children, slug }) => {
  const { title, subtitle, description, url, platform } =
    WRITING_BLOG_PAGES.find((page) => page.slug === slug) || {};

  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // `md` breakpoint

  const components = mdxComponents(isSmallScreen, url);

  return (
    <>
      <NextSeo
        openGraph={{
          type: 'website',
          locale: 'en_US',
          title: `${title}; ${subtitle} - polarzero writing`,
          description:
            description ||
            'A blog on blockchain & distributed systems; accessibility, security and adoption.',
          url: 'https://polarzero.xyz/writing',
          site_name: 'polarzero',
          images: [
            {
              url: `https://polarzero.xyz/api/og/blog-post?category=writing&title=${title}&subtitle=${subtitle}&description=${description}`,
              width: 1200,
              height: 630,
              alt: 'polarzero writing docs open-graph image',
            },
          ],
        }}
      />

      <BaseLayout title={title} subtitle={subtitle} pageSlug="/writing">
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
              <h1 className="text-3xl font-semibold tracking-tight text-gray-12">{title}</h1>
              {/* Back */}
              <Button
                className="justify-self-end"
                variant="secondary"
                intent="primary"
                href="/writing"
                leftIcon={<ChevronLeft />}
              >
                Return to Writing
              </Button>
              {/* Subtitle */}
              <h2 className="text-xl font-medium tracking-tight text-gray-11">{subtitle}</h2>
              {/* Open external link */}
              <Button
                className="justify-self-end"
                size="md"
                variant="ghost"
                href={url}
                rightIcon={<ExternalLink />}
                newTab
              >
                {platform === 'PDF' ? 'Read PDF' : `Read on ${platform}`}
              </Button>
            </div>
          )}

          {/* Post */}
          <div className="relative flex flex-col space-x-0 pb-6 md:flex-row md:space-x-16">
            <BlogPostNavBar
              slug={slug}
              selected={selected}
              sections={SECTIONS[slug] || []}
              category="blog"
            />
            <MDXProvider components={components}>
              {/* Add overflow-hidden for code-blocks (too large) so add px-1 to not hide italics */}
              <article className="prose prose-gray max-w-none grow overflow-hidden px-4 text-justify dark:prose-invert md:px-1">
                {children}
                <hr className="mb-6 mt-6 w-full rounded-full border-gray-6 md:mt-12" />
                <BlogPostPageNav pageSlug={selected} sections={SECTIONS[slug] || []} />
              </article>
            </MDXProvider>
          </div>
        </ContainerLayout>
      </BaseLayout>
    </>
  );
};

export default BlogPostLayout;
