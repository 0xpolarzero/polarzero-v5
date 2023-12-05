import { type FC } from 'react';

import { Calendar, ExternalLink, FileText, Github } from 'lucide-react';

import { BlogPost } from '@/lib/types/writing';
import { getTimePassed } from '@/lib/utils';

import LogoIcon from '@/components/common/logo-icon';
import CategoryTag from '@/components/templates/category-tag';
import FeatureDisplay from '@/components/templates/feature-display';
import { Button } from '@/components/ui';

type WritingCardFeatureProps = BlogPost;

const WritingCardFeature: FC<WritingCardFeatureProps> = ({
  title,
  subtitle,
  description,
  slug,
  date,
  platform,
  url,
  addUrl,
  tags,
}) => {
  const symbol =
    platform === 'Medium' ? (
      <LogoIcon.Medium />
    ) : platform === 'Hashnode' ? (
      <LogoIcon.Hashnode />
    ) : platform === 'Twitter' ? (
      <LogoIcon.X />
    ) : platform === 'PDF' ? (
      <FileText />
    ) : (
      <Github />
    );

  const path = platform === 'Twitter' ? 'twitter' : 'blog';

  return (
    <FeatureDisplay
      className="col-span-2 w-full"
      name={title}
      description={subtitle || ''}
      symbol={symbol}
      button={
        <Button size="sm" href={url} rightIcon={<ExternalLink />} newTab>
          {platform === 'PDF' ? 'Read PDF' : `Read on ${platform}`}
        </Button>
      }
      tags={tags.map((tag, i) => (
        <CategoryTag key={i} size="md" category={tag} />
      ))}
      internalLink={`/writing/${path}/${slug}`}
      addUrl={addUrl}
    >
      <div className="flex h-full flex-col space-y-4 p-4">
        <div className="flex-grow text-[0.92rem]">{description}</div>
        {/* date */}
        <div className="flex items-center space-x-2 text-sm text-gray-11">
          <Calendar size={16} />
          <div>{date.toDateString()}</div>
          <div>({getTimePassed(date)})</div>
        </div>
      </div>
    </FeatureDisplay>
  );
};

export default WritingCardFeature;
