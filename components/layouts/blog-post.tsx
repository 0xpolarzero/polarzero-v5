import Link from 'next/link';
import { type FC, isValidElement, type ReactNode } from 'react';

import { MDXProvider } from '@mdx-js/react';
import { NextSeo } from 'next-seo';

import { SECTIONS } from '@/lib/constants/blog';
import { WRITING_BLOG_PAGES } from '@/lib/constants/writing';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';
import type { PageSlug } from '@/lib/types/site';

import BaseLayout from '@/components/layouts/base';
import ContainerLayout from '@/components/layouts/container';
import BlogPostNavBar from '@/components/pages/writing/blog-post/nav-bar';
import BlogPostPageNav from '@/components/pages/writing/blog-post/page-nav';
import { CodeBlock } from '@/components/ui';
import type { CodeBlockProps } from '@/components/ui/code-block/types';

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
  const { title, subtitle, description } =
    WRITING_BLOG_PAGES.find((page) => page.slug === slug) || {};

  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // `md` breakpoint

  const components = {
    a: ({ href, children, ...rest }: JSX.IntrinsicElements['a']) => {
      if (href && href.startsWith('/')) {
        return (
          <Link
            className="mdx--link group font-medium text-blue-9 no-underline hover:underline"
            href={href}
          >
            {children}
          </Link>
        );
      }

      return (
        <a
          className="mdx--link group w-fit font-medium text-blue-9 no-underline hover:underline"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {children}
        </a>
      );
    },
    blockquote: ({ children }: JSX.IntrinsicElements['blockquote']) => (
      <blockquote className="mdx--blockquote group rounded-xl border border-blue-6 bg-blue-3 p-4 text-blue-12">
        {children}
      </blockquote>
    ),
    code: ({ children }: JSX.IntrinsicElements['code']) => (
      <code className="rounded border border-gray-6 bg-gray-3 px-1 py-0.5 font-normal text-gray-12 before:content-none after:content-none group-[.mdx--link]:text-blue-9">
        {children}
      </code>
    ),
    h1: ({ children }: JSX.IntrinsicElements['h1']) => (
      <h1 className="mb-4 text-3xl font-semibold tracking-tight text-gray-12 md:text-4xl">
        {children}
      </h1>
    ),
    h2: ({ children }: JSX.IntrinsicElements['h2']) => (
      <h2 className="mb-2 text-xl font-semibold tracking-tight text-gray-12 md:mb-4 md:text-2xl">
        {children}
      </h2>
    ),
    h3: ({ children }: JSX.IntrinsicElements['h3']) => (
      <h3 className="mb-2 mt-5 text-lg font-semibold tracking-tight text-gray-12 md:mb-4 md:mt-6 md:text-xl">
        {children}
      </h3>
    ),
    p: ({ children }: JSX.IntrinsicElements['p']) => (
      <p className="font-light not-italic text-gray-11 before:content-none after:content-none group-[.mdx--blockquote]:my-0 group-[.mdx--blockquote]:text-blue-12">
        {children}
      </p>
    ),
    pre: ({
      children,
      ...rest
    }: JSX.IntrinsicElements['pre'] & Omit<CodeBlockProps, 'children'>) => {
      const childrenProps = isValidElement(children) ? children.props : undefined;
      const language = childrenProps?.className ? childrenProps.className.substring(9) : undefined;
      const code = typeof childrenProps?.children === 'string' ? childrenProps.children.trim() : '';

      return (
        <CodeBlock language={language} {...rest}>
          {code}
        </CodeBlock>
      );
    },
  };

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
              url: `https://polarzero.xyz/api/og/blog-post?title=${title}&subtitle=${subtitle}&description=${description}`,
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
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight text-gray-12">{title}</h1>
              <h2 className="text-xl font-medium tracking-tight text-gray-11">{subtitle}</h2>
            </div>
          )}
          <div className="relative flex flex-col space-x-0 pb-6 md:flex-row md:space-x-16">
            <BlogPostNavBar slug={slug} selected={selected} sections={SECTIONS[slug]} />
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

export default BlogPostLayout;
