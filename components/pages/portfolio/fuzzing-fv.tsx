import { type FC } from 'react';

import { Calendar, ExternalLink, Github, Wrench } from 'lucide-react';

import { HighlightedRepo } from '@/lib/types/portfolio';
import { cn, getTimePassed } from '@/lib/utils';

import CategoryTag from '@/components/templates/category-tag';
import FeatureDisplay from '@/components/templates/feature-display';
import { Badge, Button, Tooltip } from '@/components/ui';
import { Table as TableComponent } from '@/components/ui';

type FuzzingFVFeatureProps = HighlightedRepo & {
  className?: string;
};

const FuzzingFVFeature: FC<FuzzingFVFeatureProps> = ({
  name,
  details,
  description,
  url,
  categories,
  fuzzing,
  formalVerification,
  date,
  className,
}) => {
  const tools = formalVerification ? fuzzing?.concat(formalVerification) : fuzzing;

  return (
    <FeatureDisplay
      className={cn('col-span-1 w-full min-[960px]:w-full', className)}
      name={name}
      description={details}
      symbol={<Github />}
      button={
        <Button size="sm" href={url} rightIcon={<ExternalLink />} newTab>
          Open on GitHub
        </Button>
      }
      tags={categories.map((tag, i) => (
        <CategoryTag key={i} size="md" category={tag} />
      ))}
    >
      <div className="flex h-full flex-col space-y-4 p-4 text-[0.92rem]">
        {/* description */}
        <div>{description}</div>
        {/* fuzzing */}
        {tools ? (
          <div className="flex items-center space-x-2 text-gray-11">
            <Wrench size={16} /> <span>{tools.map((tool, i) => tool.name).join(', ')}</span>
          </div>
        ) : null}
        {/* date */}
        <div className="flex items-center space-x-2 text-sm text-gray-11">
          <Calendar size={16} />
          <span>{date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
          <span>({getTimePassed(date)})</span>
        </div>
      </div>
    </FeatureDisplay>
  );
};

export default FuzzingFVFeature;
