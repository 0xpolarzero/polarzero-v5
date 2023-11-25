import { type FC, useMemo } from 'react';

import {
  AuditsTableInternalProps,
  /* , getFindingRowRoute */
} from '.';
import { ColumnDef } from '@tanstack/react-table';
import { Check, ExternalLink } from 'lucide-react';

import { AUDITS_RESULTS } from '@/lib/constants/portfolio/audits';
import { Audit, AuditDetails, Finding, FINDING_SEVERITY } from '@/lib/types/audit';

import { Button, IconButton, Table, Tooltip } from '@/components/ui';

// TODO Add icon of the platform as children, create mapping in lib/constants from platform to icon
// TODO Add different color based on category

const AuditsTableDesktop: FC<AuditsTableInternalProps> = ({ sorting, setSorting }) => {
  // protocol
  // rank
  // date + duration
  // description (type of protocol)
  // platform
  // type (color) -> audit/Certora contest/bug bounty

  /// expand
  // details (what I did, vulns, etc)
  // details about the protocol?
  // duration
  // link to report
  const columns: ColumnDef<Audit>[] = useMemo(
    () => [
      {
        accessorKey: 'protocol',
        header: 'Protocol',
        cell: ({ row }) => row.original.protocol,
        footer: (props) => props.column.id,
        size: 100,
      },
      {
        accessorKey: 'rank',
        header: 'Rank',
        cell: ({ row }) => row.original.rank ?? 'N/A',
        footer: (props) => props.column.id,
        size: 55,
      },
      {
        accessorKey: 'findings',
        header: 'Findings',
        cell: ({ row }) => {
          let total = { analysis: 0, lowQa: 0, medium: 0, high: 0, critical: 0 };
          row.original.details.findings.forEach((vuln) => total[vuln.severity]++);

          return (
            <div className="flex flex-col">
              <div>
                <span>
                  {
                    row.original.details.findings.filter((vuln) => vuln.severity !== 'analysis')
                      .length
                  }
                </span>
                <span className="text-gray-400"> (</span>
                <span className="text-red-600">{total.critical}</span>
                <span className="text-gray-400">/</span>
                <span className="text-orange-500">{total.high}</span>
                <span className="text-gray-400">/</span>
                <span className="text-yellow-400">{total.medium}</span>
                <span className="text-gray-400">/</span>
                <span className="text-green-500">{total.lowQa}</span>
                <span className="text-gray-400">)</span>
              </div>
              {total.analysis > 0 ? (
                <div className="mt-2 flex items-center space-x-2">
                  <Check size={16} /> <span>Analysis</span>
                </div>
              ) : null}
            </div>
          );
        },
        footer: (props) => props.column.id,
        size: 75,
      },
      {
        accessorKey: 'date',
        header: 'Date',
        cell: ({ row }) => (
          <div className="flex flex-row items-center space-x-2">
            <span>
              {row.original.date.toLocaleDateString('en-US', {
                month: '2-digit',
                year: '2-digit',
              })}
            </span>
            <span className="text-gray-11">({row.original.duration} days)</span>
          </div>
        ),
        footer: (props) => props.column.id,
        size: 100,
      },
      {
        accessorKey: 'shortDesc',
        header: 'Type',
        cell: ({ row }) => row.original.shortDesc,
        footer: (props) => props.column.id,
        size: 150,
      },
      {
        accessorKey: 'platform',
        header: 'Platform',
        cell: ({ row }) => (
          <Tooltip content={row.original.platform}>{row.original.platform}</Tooltip>
        ),
        footer: (props) => props.column.id,
        size: 100,
      },
      {
        accessorKey: 'accordion',
        header: 'Expand',
        cell: ({ row }) => <Table.AccordionButton row={row} />,
        footer: (props) => props.column.id,
        size: 75,
      },
    ],
    [],
  );

  return (
    <Table
      className="hidden rounded-lg md:block"
      columns={columns}
      data={AUDITS_RESULTS}
      sorting={sorting}
      setSorting={setSorting}
      renderSubComponent={({ row }) => (
        <AuditsTableDesktopSubComponent data={row.original.details} />
      )}
      noBorder
    />
  );
};

const AuditsTableDesktopSubComponent: FC<{ data: AuditDetails }> = ({ data }) => {
  // description
  // url
  const columns = useMemo<ColumnDef<Finding>[]>(
    () => [
      {
        accessorKey: 'severity',
        header: 'Severity',
        cell: ({ row }) => FINDING_SEVERITY[row.original.severity],
        footer: (props) => props.column.id,
        size: 100,
      },
      {
        accessorKey: 'title',
        header: 'Title',
        cell: ({ row }) => row.original.title,
        footer: (props) => props.column.id,
        size: 500,
      },
      {
        accessorKey: 'url',
        header: () => 'Report',
        cell: ({ row }) => {
          return (
            <div className="flex justify-end">
              <IconButton
                variant="outline"
                intent="none"
                title="View report"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(row.original.url, '_blank');
                }}
                aria-label="View report"
              >
                <ExternalLink />
              </IconButton>
            </div>
          );
        },
        footer: (props) => props.column.id,
        size: 75,
      },
    ],
    [],
  );

  return (
    <div>
      <div>Description and stuff (description, url?)</div>
      <Table
        columns={columns}
        data={data.findings}
        // getRowRoute={getFindingRowRoute}
        isSubTable
        noBorder
      />
    </div>
  );
};

AuditsTableDesktop.displayName = 'AuditsTableDesktop';

export default AuditsTableDesktop;
