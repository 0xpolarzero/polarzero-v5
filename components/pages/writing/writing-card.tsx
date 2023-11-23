import { type FC } from 'react';

import { Calendar, ExternalLink, FileText, Github, Twitter } from 'lucide-react';

import { BlogPost } from '@/lib/types/writing';
import { getTimePassed } from '@/lib/utils';

import CategoryTag from '@/components/templates/category-tag';
import FeatureDisplay from '@/components/templates/feature-display';
import { Button } from '@/components/ui';

// Add hover on the card & open the page here
// Add filters for catefories
// Add a timeline view???

type WritingCardFeatureProps = BlogPost;

const WritingCardFeature: FC<WritingCardFeatureProps> = ({
  title,
  subtitle,
  description,
  slug,
  date,
  platform,
  url,
  tags,
}) => {
  const symbol =
    platform === 'Medium' ? (
      <svg
        width="24"
        height="24"
        viewBox="0 -55 256 256"
        version="1.1"
        preserveAspectRatio="xMidYMid"
      >
        <g>
          <path
            d="M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z"
            fill="#FFFFFFB0"
          ></path>
        </g>
      </svg>
    ) : platform === 'Hashnode' ? (
      <svg width="24" height="24" viewBox="0 0 337 337" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.155 112.598c-30.873 30.874-30.873 80.93 0 111.804l89.443 89.443c30.874 30.873 80.93 30.873 111.804 0l89.443-89.443c30.873-30.874 30.873-80.93 0-111.804l-89.443-89.443c-30.874-30.873-80.93-30.873-111.804 0l-89.443 89.443zm184.476 95.033c21.612-21.611 21.612-56.651 0-78.262-21.611-21.612-56.651-21.612-78.262 0-21.612 21.611-21.612 56.651 0 78.262 21.611 21.612 56.651 21.612 78.262 0z"
          fill="#FFFFFFB0"
        />
      </svg>
    ) : platform === 'Twitter' ? (
      <Twitter />
    ) : platform === 'PDF' ? (
      <FileText />
    ) : (
      <Github />
    );

  const path = platform === 'Twitter' ? 'twitter' : 'blog';

  return (
    <FeatureDisplay
      className="col-span-1 h-full w-full min-[960px]:w-full"
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
