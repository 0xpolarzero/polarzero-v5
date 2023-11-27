import { type FC } from 'react';

import {
  Calendar,
  ExternalLink,
  FileText,
  Github,
  HelpCircle,
  Home,
  Info,
  Twitter,
} from 'lucide-react';

import { PLATFORM_ICONS } from '@/lib/constants/portfolio/platforms';
import { PROTOCOL_ICONS } from '@/lib/constants/portfolio/protocols';
import { Audit, AuditCompetition, Finding } from '@/lib/types/portfolio';
import { getTimePassed } from '@/lib/utils';

import CategoryTag from '@/components/templates/category-tag';
import FeatureDisplay from '@/components/templates/feature-display';
import { Badge, Button, Tooltip } from '@/components/ui';

type AuditCardFeatureProps = Audit | AuditCompetition;

type SeverityCounts = {
  critical?: number;
  high?: number;
  medium?: number;
  lowQa?: number;
  analysis?: number;
};

const isAuditCompetition = (object: Audit | AuditCompetition): object is AuditCompetition => {
  return 'rank' in object && 'platform' in object;
};

const AudiCardFeature: FC<AuditCardFeatureProps> = (props) => {
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

  const severityCounts = findings.reduce((acc: SeverityCounts, finding: Finding) => {
    const severity = finding.severity;
    acc[severity] = (acc[severity] || 0) + 1;
    return acc;
  }, {} as SeverityCounts);

  const formattedSeverities = Object.entries(severityCounts)
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
          Open report on {platform}
        </Button>
      }
      tags={categories.map((tag, i) => (
        <CategoryTag key={i} size="md" category={tag} />
      ))}
      internalLink={`/portfolio/audits/${slug}`}
    >
      <div className="flex h-full flex-col space-y-4 p-4">
        {/* description */}
        <div className="flex-grow text-[0.92rem]">{description}</div>
        {/* rank */}
        {isAuditCompetition(props) ? (
          <div className="flex items-center space-x-2">
            <h2 className="font-medium text-gray-11">Rank</h2>
            <span className="font-base tracking-widest text-gray-11">#{rank}</span>
          </div>
        ) : null}
        {/* findings */}
        <h2 className="font-medium text-gray-11">Findings</h2>
        <div className="flex flex-wrap space-x-2">
          {formattedSeverities}
          {severityCounts.analysis && severityCounts.analysis > 0 ? (
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

export default AudiCardFeature;
