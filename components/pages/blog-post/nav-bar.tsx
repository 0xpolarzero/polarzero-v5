import { type FC, Fragment, useMemo, useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import { ChevronRight, Menu, X } from 'lucide-react';

import { WRITING_PAGES } from '@/lib/constants/writing';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';
import { BlogPostSection } from '@/lib/types/blog-post';
import type { PageSlug } from '@/lib/types/site';
import { cn } from '@/lib/utils';

import { Button, IconButton } from '@/components/ui';

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

type BlogPostNavBarProps = {
  selected?: PageSlug;
  slug: string;
  sections: BlogPostSection[];
  category: 'blog' | 'audit' | 'bug bounty';
};

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const BlogPostNavBar: FC<BlogPostNavBarProps> = (props) => {
  return (
    <Fragment>
      <BlogPostNavBarDesktop {...props} />
      <BlogPostNavBarMobile {...props} />
    </Fragment>
  );
};

const BlogPostNavBarDesktop: FC<BlogPostNavBarProps> = ({ selected, sections, slug, category }) => {
  return (
    <nav
      className="hide-scrollbar sticky top-28 -ml-3 hidden min-w-[18rem] max-w-[18rem] flex-col overflow-y-scroll px-0.5 md:flex lg:min-w-[20rem] lg:max-w-[20rem]"
      style={{ height: 'calc(100vh - 11rem)' }}
    >
      <BlogPostNavBarInternal
        selected={selected}
        sections={sections}
        slug={slug}
        category={category}
      />
    </nav>
  );
};

const BlogPostNavBarMobile: FC<BlogPostNavBarProps> = ({ selected, sections, slug, category }) => {
  const title = WRITING_PAGES.find((page) => page.slug === slug)?.title || '';

  const [open, setOpen] = useState<boolean>(false);
  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // `md` breakpoint

  const selectedSection = useMemo(() => {
    for (const section of sections) {
      if (selected === section.slug) {
        return section.title;
      }
    }

    return '';
  }, [selected, sections]);

  return (
    <Dialog.Root open={open && isSmallScreen} onOpenChange={setOpen}>
      <div className="pointer-events-auto sticky top-12 z-popover mb-6 flex h-12 w-full items-center border-b border-gray-6 bg-white px-4 dark:bg-black md:hidden">
        <Dialog.Trigger asChild>
          <IconButton
            variant="outline"
            aria-label={open ? 'Close blog post nav bar' : 'Open blog post nav bar'}
          >
            {open ? <X /> : <Menu />}
          </IconButton>
        </Dialog.Trigger>
        <ol className="ml-4 flex text-sm">
          <li className="flex items-center text-gray-11">
            {title}
            <ChevronRight className="mx-1 h-4 w-4" />
          </li>
          <li className="font-medium text-gray-12">{selectedSection}</li>
        </ol>
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-overlay backdrop-brightness-50 animate-in fade-in-50 focus:outline-none md:hidden" />
        <Dialog.Content onOpenAutoFocus={(e) => e.preventDefault()} asChild>
          <nav className="hide-scrollbar fixed inset-0 z-overlay overflow-y-scroll bg-gray-1 p-4 pt-28 animate-in slide-in-from-top-1 md:hidden">
            {sections.map((section, index) => (
              <Fragment key={index}>
                <Button
                  className={cn(
                    'w-full justify-start py-1 text-base font-medium',
                    selected === section.slug
                      ? 'cursor-default bg-gray-4 text-left text-white'
                      : '',
                    section.subsections.length === 0 ? 'mb-2' : '',
                  )}
                  href={`/${category === 'blog' ? 'writing' : 'portfolio'}/${
                    category === 'blog' ? 'blog' : category === 'audit' ? 'audit' : 'bounty'
                  }/${slug}/${section.slug}`}
                  variant="ghost"
                  disabled={selected === section.slug}
                >
                  {section.title}
                </Button>
                {section.subsections.map((subsection, i) => {
                  return (
                    <div key={subsection.slug}>
                      <div
                        className={cn(
                          'ml-4 w-full justify-start py-[0.2rem] text-sm text-gray-11',
                          i === section.subsections.length - 1 ? 'mb-2' : '',
                        )}
                      >
                        {subsection.title}
                      </div>
                    </div>
                  );
                })}
              </Fragment>
            ))}
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const BlogPostNavBarInternal: FC<BlogPostNavBarProps> = ({
  selected,
  sections,
  slug,
  category,
}) => {
  return (
    <Fragment>
      {sections.map((section, index) => (
        <Fragment key={index}>
          <Button
            className={cn(
              'my-2 h-min w-full justify-start py-1 text-base font-medium',
              selected === section.slug ? 'cursor-default bg-gray-4 text-left text-white' : '',
              section.subsections.length === 0 ? 'mb-2' : '',
            )}
            href={`/${category === 'blog' ? 'writing' : 'portfolio'}/${
              category === 'blog' ? 'blog' : category === 'audit' ? 'audit' : 'bounty'
            }/${slug}/${section.slug}`}
            variant="ghost"
            disabled={selected === section.slug}
          >
            {section.title}
          </Button>
          {section.subsections.map((subsection, i) => {
            return (
              <div key={subsection.slug}>
                <div
                  className={cn(
                    'ml-4 w-full justify-start py-[0.2rem] text-sm text-gray-11',
                    i === section.subsections.length - 1 ? 'mb-2' : '',
                  )}
                >
                  {subsection.title}
                </div>
              </div>
            );
          })}
        </Fragment>
      ))}
    </Fragment>
  );
};

export default BlogPostNavBar;
