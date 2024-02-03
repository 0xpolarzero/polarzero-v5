import { type FC } from 'react';

import GasReportBreakdown from './gas-report-breakdown';
import GasReportHome from './gas-report-home';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

type GasReportLayoutProps = {
  readme: MDXRemoteSerializeResult<Record<string, unknown>>;
  contracts: Record<string, { code: string; url: string }>;
  repoUrl: string;
};

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const GasReportLayout: FC<GasReportLayoutProps> = ({ readme, contracts, repoUrl }) => {
  if (readme) return <GasReportBreakdown readme={readme} contracts={contracts} repoUrl={repoUrl} />;
  return <GasReportHome />;
};

GasReportLayout.displayName = 'GasReportLayout';

export default GasReportLayout;
