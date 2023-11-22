import { type FC, Fragment, useMemo, useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import clsx from 'clsx';
import { ChevronRight, Menu, X } from 'lucide-react';

import { useMediaQuery } from '@/lib/hooks/useMediaQuery';
import type { PageSlug } from '@/lib/types/site';
import { BlogPostSection } from '@/lib/types/writing';

import { Button, IconButton } from '@/components/ui';

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

type BlogPostNavBarProps = {
  selected?: PageSlug;
  slug: string;
  sections: BlogPostSection[];
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

const BlogPostNavBarDesktop: FC<BlogPostNavBarProps> = ({ selected, sections, slug }) => {
  return (
    <nav
      className="hide-scrollbar sticky top-28 -ml-3 hidden min-w-[18rem] max-w-[18rem] flex-col overflow-y-scroll px-0.5 md:flex"
      style={{ height: 'calc(100vh - 11rem)' }}
    >
      <BlogPostNavBarInternal selected={selected} sections={sections} slug={slug} />
    </nav>
  );
};

const BlogPostNavBarMobile: FC<BlogPostNavBarProps> = ({ selected, sections, slug }) => {
  const [open, setOpen] = useState<boolean>(false);
  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // `md` breakpoint

  const [selectedSectionName, selectedSubsectionName] = useMemo(() => {
    for (const section of sections) {
      for (const subsection of section.subsections) {
        if (selected === subsection.slug) {
          return [section.title, subsection.title];
        }
      }
    }
    return ['', ''];
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
            {selectedSectionName}
            <ChevronRight className="mx-1 h-4 w-4" />
          </li>
          <li className="font-medium text-gray-12">{selectedSubsectionName}</li>
        </ol>
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-overlay backdrop-brightness-50 animate-in fade-in-50 focus:outline-none md:hidden" />
        <Dialog.Content onOpenAutoFocus={(e) => e.preventDefault()} asChild>
          <nav className="hide-scrollbar fixed inset-0 z-overlay overflow-y-scroll bg-gray-1 p-4 pt-28 animate-in slide-in-from-top-1 md:hidden">
            {sections.map((section, index) => (
              <Fragment key={index}>
                <div className="ml-3 text-base font-medium text-gray-12">{section.title}</div>
                {section.subsections.map((subsection) => {
                  const isSelected = selected === subsection.slug;
                  return (
                    <div key={subsection.slug}>
                      <Button
                        className={clsx(
                          'mt-1 w-full justify-start',
                          isSelected ? 'cursor-default bg-gray-4' : '',
                        )}
                        variant="ghost"
                        href={`#${subsection.slug}`}
                        disabled={isSelected}
                      >
                        {subsection.title}
                      </Button>
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

const BlogPostNavBarInternal: FC<BlogPostNavBarProps> = ({ selected, sections, slug }) => {
  return (
    <Fragment>
      {sections.map((section, index) => (
        <Fragment key={index}>
          <Button
            className={clsx(
              'h-full w-full justify-start py-1 text-base font-medium',
              selected === section.slug ? 'cursor-default bg-gray-4 text-left text-white' : '',
              section.subsections.length === 0 ? 'mb-2' : '',
            )}
            href={`/writing/blog/${slug}/${section.slug}`}
            variant="ghost"
            disabled={selected === section.slug}
          >
            {section.title}
          </Button>
          {section.subsections.map((subsection, i) => {
            return (
              <div key={subsection.slug}>
                <div
                  className={clsx(
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
