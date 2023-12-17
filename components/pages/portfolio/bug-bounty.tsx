import { type FC } from 'react';

import { Calendar, ExternalLink } from 'lucide-react';

import { PLATFORM_ICONS } from '@/lib/constants/portfolio/platforms';
import { PROTOCOL_ICONS } from '@/lib/constants/portfolio/protocols';
import { BugBounty, FINDING_SEVERITY } from '@/lib/types/portfolio';
import { getTimePassed } from '@/lib/utils';

import CategoryTag from '@/components/templates/category-tag';
import FeatureDisplay from '@/components/templates/feature-display';
import { Badge, Button, Tooltip } from '@/components/ui';
import { Table as TableComponent } from '@/components/ui';

type BugBountyFeatureProps = BugBounty;

const { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } = TableComponent;

const BugBountyFeature: FC<BugBountyFeatureProps> = ({
  protocol,
  platform,
  date,
  shortDesc,
  categories,
  description,
  url,
  slug,
  finding,
}) => {
  return (
    <FeatureDisplay
      className="col-span-1 w-full min-[960px]:w-full"
      name={protocol}
      description={shortDesc}
      symbol={<Tooltip content={protocol}>{PROTOCOL_ICONS[protocol]}</Tooltip>}
      button={
        <Button size="sm" href={url} rightIcon={<ExternalLink />} newTab>
          Open writeup on Medium
        </Button>
      }
      tags={categories.map((tag, i) => (
        <CategoryTag key={i} size="md" category={tag} />
      ))}
      internalLink={`/portfolio/bounty/${slug}`}
    >
      <div className="flex h-full flex-col space-y-4 p-4">
        {/* description */}
        <div className="text-[0.92rem]">{description}</div>
        {/* finding */}
        <Table className="flex-grow">
          <TableHeader>
            <TableRow>
              <TableHead>Finding</TableHead>
              <TableHead>
                <Badge
                  variant="secondary"
                  intent={
                    finding.severity === 'critical'
                      ? 'fail'
                      : finding.severity === 'high'
                      ? 'orange'
                      : finding.severity === 'medium'
                      ? 'warning'
                      : 'none'
                  }
                  className="font-normal"
                >
                  {FINDING_SEVERITY[finding.severity]} vulnerability
                </Badge>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-gray-11">Title</TableCell>
              <TableCell>{finding.title}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-gray-11">Details</TableCell>
              <TableCell>{finding.description}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-gray-11">Reward</TableCell>
              <TableCell>
                {finding.reward.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  maximumFractionDigits: 0,
                })}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        {/* platform */}
        {platform ? (
          <div className="flex items-center space-x-2 text-sm text-gray-11">
            {PLATFORM_ICONS[platform || ''](16)}
            <span>{platform}</span>
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

export default BugBountyFeature;
