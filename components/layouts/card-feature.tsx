import Link from 'next/link';
import { type FC } from 'react';

import { CaretRightIcon } from '@radix-ui/react-icons';
import { BookIcon, GithubIcon, LinkIcon, NewspaperIcon, PlayIcon, Wrench } from 'lucide-react';
import { Calendar } from 'lucide-react';

import { ResumeItem } from '@/lib/types/resume';
import { getDurationApprox } from '@/lib/utils/getTimePassed';

import CategoryTag, { Category } from '@/components/templates/category-tag';
import FeatureDisplay from '@/components/templates/feature-display';
import { Button } from '@/components/ui';

type CardFeatureProps = ResumeItem & {
  categoryIntents: Category[];
};

const CardFeature: FC<CardFeatureProps> = ({
  categoryIntents,
  status,
  categories,
  title,
  description,
  startDate,
  endDate,
  mainUrl,
  websiteUrl,
  githubUrl,
  demoUrl,
  documentationUrl,
  articleUrl,
  slug,
  stack,
  symbol,
  starred,
}) => {
  const urls = [
    { url: websiteUrl, icon: <LinkIcon /> },
    { url: githubUrl, icon: <GithubIcon /> },
    { url: demoUrl, icon: <PlayIcon /> },
    { url: documentationUrl, icon: <BookIcon /> },
    { url: articleUrl, icon: <NewspaperIcon /> },
  ].filter((obj) => obj.url);

  return (
    <FeatureDisplay
      className="col-span-2 w-full"
      name={title}
      description={
        status === 'research-work' || status === 'research-education' ? 'research' : status
      }
      highlight={starred}
      symbol={symbol || <CaretRightIcon className="h-6 w-6" />}
      tags={categories.map((cat, index) => (
        <CategoryTag
          key={index}
          size="sm"
          category={{
            name: cat,
            intent: categoryIntents.find((catRef) => catRef.name === cat)?.intent,
          }}
        />
      ))}
      header={
        slug ? { url: `/writing/blog/${slug}`, internal: true } : { url: mainUrl, internal: false }
      }
      buttons={[
        urls.map((obj, index) => (
          <Button key={index} size="sm" href={obj.url} rightIcon={obj.icon} newTab />
        )),
      ]}
    >
      <div className="flex h-full flex-col space-y-4 p-4">
        <div className="flex-grow text-[0.92rem]">{description}</div>
        {stack ? (
          <div className="flex items-center space-x-2 text-sm text-gray-11">
            <Wrench size={16} />
            <div>
              {stack?.map((tech, index) =>
                index === 0 ? (
                  <StackLink key={index} name={tech.name} url={tech.url} i={index} />
                ) : (
                  <span key={index}>
                    , <StackLink name={tech.name} url={tech.url} i={index} />
                  </span>
                ),
              )}
            </div>
          </div>
        ) : null}
        {/* date */}
        <div className="flex items-center space-x-2 text-sm text-gray-11">
          <Calendar size={16} />
          <div>
            {endDate
              ? endDate.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: '2-digit',
                })
              : 'current'}
          </div>
          <div>({getDurationApprox(startDate, endDate)})</div>
        </div>
      </div>
    </FeatureDisplay>
  );
};

const StackLink = ({ name, url, i }: { name: string; url: string | undefined; i: number }) => {
  return url ? (
    <Link
      key={i}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium hover:underline"
      onClick={(e) => e.stopPropagation()}
    >
      {name}
    </Link>
  ) : (
    <span key={i}>{name}</span>
  );
};

export default CardFeature;
