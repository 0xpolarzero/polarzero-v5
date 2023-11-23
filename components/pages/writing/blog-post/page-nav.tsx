import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type FC, useMemo } from 'react';

import { ArrowLeft, ArrowRight } from 'lucide-react';

import type { PageSlug } from '@/lib/types/site';
import { BlogPostSection } from '@/lib/types/writing';

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

type BlogPostPageNavProps = {
  pageSlug?: PageSlug;
  sections: BlogPostSection[];
};

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const BlogPostPageNav: FC<BlogPostPageNavProps> = ({ pageSlug, sections }) => {
  const path = usePathname();

  const prevPage = useMemo(() => {
    const index = sections.findIndex((section) => section.slug === pageSlug);

    return index > 0 ? sections[index - 1] : null;
  }, [sections, pageSlug]);

  const nextPage = useMemo(() => {
    const index = sections.findIndex((section) => section.slug === pageSlug);

    if (index === -1) {
      return null;
    }

    return index !== -1 && index < sections.length - 1 ? sections[index + 1] : null;
  }, [sections, pageSlug]);

  return (
    <div className="flex w-full items-center justify-between">
      {prevPage ? (
        <Link
          className="flex items-center space-x-1 text-sm text-gray-11 no-underline transition-colors hover:text-gray-12"
          href={
            // special case when we are on the second page (no slug for the first page)
            pageSlug === sections[1].slug ? path.split('/').slice(0, -1).join('/') : prevPage.slug
          }
        >
          <ArrowLeft className="h-4 w-4" />
          <div>{prevPage.title}</div>
        </Link>
      ) : (
        <div />
      )}
      {nextPage ? (
        <Link
          className="flex items-center space-x-1 text-sm text-gray-11 no-underline transition-colors hover:text-gray-12"
          href={
            !pageSlug
              ? // special case when we are on the first page (no slug)
                path.split('/').slice(-1).join('/') + '/' + nextPage.slug
              : nextPage.slug
          }
        >
          <div>{nextPage.title}</div>
          <ArrowRight className="h-4 w-4" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
};

export default BlogPostPageNav;
