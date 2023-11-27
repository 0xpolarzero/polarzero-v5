import { type FC } from 'react';

import { Calendar, ExternalLink } from 'lucide-react';

import { PLATFORM_ICONS } from '@/lib/constants/portfolio/platforms';
import { PROTOCOL_ICONS } from '@/lib/constants/portfolio/protocols';
import { Audit } from '@/lib/types/portfolio';
import { getTimePassed } from '@/lib/utils';

import CategoryTag from '@/components/templates/category-tag';
import FeatureDisplay from '@/components/templates/feature-display';
import { Badge, Button, Tooltip } from '@/components/ui';

type AuditCardFeatureProps = Audit;

const isAuditCompetition = (object: Audit): object is Audit => {
  return 'rank' in object && 'platform' in object;
};

const AuditCardFeature: FC<AuditCardFeatureProps> = (props) => {
  // Access common properties
  const { protocol, date, duration, shortDesc, categories, description, url, slug, findings } =
    props;
  // Access competition-specific properties
  let rank;
  let platform;
  if (isAuditCompetition(props)) {
    rank = props.rank;
    platform = props.platform;
  }

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
      className="col-span-1 h-full w-full min-[960px]:w-full"
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
      // bgImmersive={categories.includes('audit competition') ? 'bg-orange' : 'bg-blue'}
      // bgBase={categories.includes('audit competition') ? 'bg-orange' : 'bg-blue'}
    >
      <div className="flex h-full flex-col space-y-4 p-4">
        {/* description */}
        <div className="flex-grow text-[0.92rem]">{description}</div>
        <h2 className="flex items-center space-x-2 font-medium text-gray-11">
          <span>Findings</span>
          {/* rank */}
          {isAuditCompetition(props) ? (
            <span className="text-sm font-normal tracking-widest text-gray-11">(#{rank})</span>
          ) : null}
        </h2>
        {/* findings */}
        <div className="flex flex-wrap space-x-2">
          {formattedSeverities}
          {findings.analysis > 0 ? (
            <Badge variant="secondary" intent="success" className="font-normal">
              Analysis
            </Badge>
          ) : null}
        </div>
        {/* platform */}
        {isAuditCompetition(props) ? (
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
