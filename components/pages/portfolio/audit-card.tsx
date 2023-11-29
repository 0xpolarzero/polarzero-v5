import { type FC } from 'react';

import { Calendar, ExternalLink } from 'lucide-react';

import { PLATFORM_ICONS } from '@/lib/constants/portfolio/platforms';
import { PROTOCOL_ICONS } from '@/lib/constants/portfolio/protocols';
import { Audit } from '@/lib/types/portfolio';
import { cn, getTimePassed } from '@/lib/utils';

import CategoryTag from '@/components/templates/category-tag';
import FeatureDisplay from '@/components/templates/feature-display';
import { Badge, Button, Tooltip } from '@/components/ui';

type AuditCardFeatureProps = Audit & {
  className?: string;
};

const isCompetition = (object: Audit): object is Audit => {
  return 'rank' in object && 'platform' in object;
};

const AuditCardFeature: FC<AuditCardFeatureProps> = (props) => {
  // Access common properties
  const { protocol, date, duration, shortDesc, categories, description, url, slug, findings } =
    props;
  // Access competition-specific properties
  let rank;
  let platform;
  if (isCompetition(props)) {
    rank = props.rank;
    platform = props.platform;
  }

  const hasAtLeastOneFinding = () => {
    return Object.entries(findings).some(([key, count]) => key !== 'analysis' && count > 0);
  };

  const formattedSeverities = Object.entries(findings)
    .filter(([severity, count]) => count > 0 && severity != 'analysis') // Filter out severities with no occurrences
    .map(([severity, count]) => (
      <Badge
        key={severity}
        variant="secondary"
        intent={
          severity === 'critical'
            ? 'fail'
            : severity === 'high'
            ? 'orange'
            : severity === 'medium'
            ? 'warning'
            : 'none'
        }
        className="font-normal"
      >
        {count} {severity === 'lowQa' ? 'low / QA' : severity}
      </Badge>
    ));

  return (
    <FeatureDisplay
      className={cn('col-span-1 w-full min-[960px]:w-full', props.className)}
      name={protocol}
      description={shortDesc}
      symbol={<Tooltip content={protocol}>{PROTOCOL_ICONS[protocol]}</Tooltip>}
      button={
        <Button size="sm" href={url} rightIcon={<ExternalLink />} newTab>
          Open report on {categories.includes('audit competition') ? platform : 'GitHub'}
        </Button>
      }
      tags={categories.map((tag, i) => (
        <CategoryTag key={i} size="md" category={tag} />
      ))}
      internalLink={`/portfolio/audit/${slug}`}
    >
      <div className="flex h-full flex-col space-y-4 p-4">
        {/* description */}
        <div className="text-[0.92rem]">{description}</div>
        {/* findings */}
        {hasAtLeastOneFinding() ? (
          <div className="flex flex-grow flex-col space-y-2">
            <h2 className="flex items-center space-x-2 font-medium text-gray-11">
              <span>Findings</span>
              {/* rank */}
              {isCompetition(props) ? (
                <span className="text-sm font-normal tracking-widest text-gray-11">(#{rank})</span>
              ) : null}
            </h2>
            <div className="flex flex-wrap items-baseline space-x-2 space-y-1">
              {formattedSeverities}
              {findings.analysis > 0 ? (
                <Badge variant="secondary" intent="success" className="font-normal">
                  Analysis
                </Badge>
              ) : null}
            </div>
          </div>
        ) : isCompetition(props) ? (
          <>
            <h2 className="flex items-center space-x-2 text-sm font-medium text-gray-11">
              <span>Placed</span>
              <span className="text-sm font-normal tracking-widest text-gray-11">#{rank}</span>
            </h2>
            {findings.analysis > 0 ? (
              <Badge variant="secondary" intent="success" className="font-normal">
                Analysis
              </Badge>
            ) : null}
          </>
        ) : null}
        {/* platform */}
        {isCompetition(props) ? (
          <div className="flex items-center space-x-2 text-sm text-gray-11">
            {PLATFORM_ICONS[platform || ''](16)}
            <span>{platform}</span>
          </div>
        ) : null}
        {/* date */}
        <div className="flex items-center space-x-2 text-sm text-gray-11">
          <Calendar size={16} />
          <span>{date.toDateString()}</span>
          <span>({getTimePassed(date)})</span>
          <span className="px-2 text-gray-10">|</span>
          <span>{duration} days</span>
        </div>
      </div>
    </FeatureDisplay>
  );
};

export default AuditCardFeature;
