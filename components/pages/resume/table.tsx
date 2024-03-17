import Link from 'next/link';
import { FC, Fragment } from 'react';

import { BookIcon, GithubIcon, LinkIcon, NewspaperIcon, PlayIcon } from 'lucide-react';

import { RESUME_ABOUT, RESUME_ATTRIBUTES } from '@/lib/constants/resume';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';
import { ResumeItem, ResumeTab } from '@/lib/types/resume';
import { cn } from '@/lib/utils';
import { getDurationApprox } from '@/lib/utils/getTimePassed';

import { Badge, Button } from '@/components/ui';

// Get the appropriate prefix for the status depending on if it's ongoing or not
const getPrefix = (status: ResumeItem['status'], endDate: Date | undefined) => {
  const variant = endDate ? 'secondary' : 'primary';
  const { intent, labels } = RESUME_ATTRIBUTES[status];

  return (
    <Badge
      variant={variant}
      intent={intent}
      size="sm"
      className="inline-block rounded-sm font-normal"
    >
      {endDate ? labels[1] : labels[0]}
    </Badge>
  );
};

type ResumeTableProps = {
  items: Array<[string, ResumeItem[]]>;
  tab: ResumeTab;
};

const ResumeTable: FC<ResumeTableProps> = ({ items, tab }) => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // md

  if (tab === 'me') {
    return (
      <div className="grid grid-cols-[min-content_1fr] gap-x-6 gap-y-3 font-sans text-sm">
        <span className="font-medium text-muted-foreground">name</span>
        <span>{RESUME_ABOUT.name}</span>
        <span className="font-medium text-muted-foreground">age</span>
        <span className="font-mono">{RESUME_ABOUT.age.toFixed(4)}</span>
        <span className="whitespace-nowrap font-medium text-muted-foreground">location</span>
        {RESUME_ABOUT.location}
        <span className="font-medium text-muted-foreground">like</span>
        <div className="flex flex-wrap gap-2">
          {RESUME_ABOUT.like.map((like, index) => (
            <Badge
              key={index}
              intent={like.intent}
              variant="secondary"
              size="sm"
              className="rounded-sm font-normal"
            >
              {like.value}
            </Badge>
          ))}
        </div>
      </div>
    );
  }

  if (isSmallScreen)
    return (
      <div className="flex flex-col gap-y-1 font-sans text-xs">
        {items.map(([year, items]) =>
          items.length ? (
            <Fragment key={year}>
              <span className="col-span-2 -ml-2 font-semibold text-muted-foreground">{year}</span>
              <ResumeTableItems items={items} />
            </Fragment>
          ) : null,
        )}
      </div>
    );

  return (
    <div className="grid grid-cols-[min-content_1fr] gap-x-2 gap-y-1 font-sans text-sm">
      {items.map(([year, items]) =>
        items.length ? (
          <Fragment key={year}>
            <span className="col-span-2 -ml-4 font-semibold text-muted-foreground">{year}</span>
            <ResumeTableItems items={items} />
          </Fragment>
        ) : null,
      )}
    </div>
  );
};

const ResumeTableItems: FC<{ items: ResumeItem[] }> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => {
        return (
          <Fragment key={index}>
            <div className="row-span-2 mr-2 flex justify-between gap-2 text-muted-foreground md:flex-col md:justify-normal md:gap-1">
              <span className="whitespace-nowrap">
                {item.endDate
                  ? item.endDate.toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric',
                    })
                  : 'now'}{' '}
                ({getDurationApprox(item.startDate, item.endDate)})
              </span>
              {getPrefix(item.status, item.endDate)}
            </div>
            <div className="text-justify">
              <Link
                href={item.mainUrl}
                className="font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
              </Link>{' '}
              - {item.description}
            </div>
            <div
              className={cn(
                'flex flex-wrap items-center justify-between gap-x-4 gap-y-2',
                index < items.length - 1 && 'mb-2',
              )}
            >
              {item.stack ? (
                <div className="flex flex-wrap items-end gap-x-2 gap-y-1 text-muted-foreground">
                  {item.stack?.map((stack, index) => (
                    <div key={index}>
                      {stack.url ? (
                        <Link
                          href={stack.url}
                          className="font-medium hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {stack.name}
                        </Link>
                      ) : (
                        stack.name
                      )}
                      {item.stack && index < item.stack.length - 1 ? ',' : null}
                    </div>
                  ))}
                </div>
              ) : (
                <div />
              )}
              <div className="flex flex-wrap gap-x-2 gap-y-1">
                {item.websiteUrl ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    leftIcon={<LinkIcon />}
                    href={item.websiteUrl}
                    newTab
                  >
                    website
                  </Button>
                ) : null}
                {item.githubUrl ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    leftIcon={<GithubIcon />}
                    href={item.githubUrl}
                    newTab
                  >
                    GitHub
                  </Button>
                ) : null}
                {item.demoUrl ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    leftIcon={<PlayIcon />}
                    href={item.demoUrl}
                    newTab
                  >
                    demo
                  </Button>
                ) : null}
                {item.documentationUrl ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    leftIcon={<BookIcon />}
                    href={item.documentationUrl}
                    newTab
                  >
                    {item.documentationUrl.includes('.pdf') ||
                    item.documentationUrl.includes('drive.google.com/file')
                      ? 'PDF'
                      : 'docs'}
                  </Button>
                ) : null}
                {item.articleUrl ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    leftIcon={<NewspaperIcon />}
                    href={item.articleUrl}
                    newTab
                  >
                    Article
                  </Button>
                ) : null}
              </div>
            </div>
          </Fragment>
        );
      })}
    </>
  );
};

export default ResumeTable;
