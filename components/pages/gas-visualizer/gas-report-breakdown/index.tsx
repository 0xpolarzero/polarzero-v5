import { type FC } from 'react';

import GasReportBreakdownActionBar from './action-bar';
import { MDXRemote } from 'next-mdx-remote';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';

import { useMediaQuery } from '@/lib/hooks/useMediaQuery';

import mdxComponents from '@/components/layouts/mdx-components';

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

type GasReportBreakdownProps = {
  readme: MDXRemoteSerializeResult<Record<string, unknown>>;
  contracts: Record<string, { code: string; url: string }>;
  repoUrl: string;
};

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const GasReportBreakdown: FC<GasReportBreakdownProps> = ({ readme, contracts, repoUrl }) => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // `md` breakpoint

  const hrefRegex = /href:\s*["']([^"']+\.sol(?:#L\d+(?:-\d+)?)?)["']/g;
  const modifiedSource = readme.compiledSource
    // Pass the contracts to the MDX components (links to internal contracts)
    .replace(hrefRegex, (match, href) => {
      if (!href.startsWith('http')) {
        const property = Object.keys(contracts).find((key) => href.includes(key));
        const contractInfo = contracts[property as string];
        const contractCode = contractInfo?.code;
        // Get line numbers
        const lineNumbers = href.match(/#L(\d+)(?:-(\d+))?/);
        const startLine = lineNumbers ? lineNumbers[1] : null;
        const endLine = lineNumbers ? lineNumbers[2] : null;
        const highlight = endLine ? [startLine, endLine] : [startLine];

        return `href: "${href}", code: "${encodeURIComponent(
          contractCode,
        )}", highlight: ${JSON.stringify(highlight)}`;
      }

      return match;
    })
    // Replace any [!NOTE], [!TIP], etc with just Note:, Tip:, etc (no support for this GitHub feature)
    .replace(/\[!(NOTE|TIP|WARNING|DANGER)\]/g, (_, type) => {
      return `${type[0]}${type.toLowerCase().slice(1)}:`;
    });

  const readmeWithContracts = {
    ...readme,
    compiledSource: modifiedSource,
  };

  const components = mdxComponents(isSmallScreen, repoUrl);

  return (
    <>
      <div className="relative flex flex-col space-x-0 pb-6 md:flex-row md:space-x-16">
        <GasReportBreakdownActionBar repoUrl={repoUrl} />
        {/* Add overflow-hidden for code-blocks (too large) so add px-1 to not hide italics */}
        <article className="prose prose-gray max-w-none grow overflow-hidden px-4 dark:prose-invert md:px-1">
          <MDXRemote {...readmeWithContracts} components={components} />
        </article>
      </div>
    </>
  );
};

GasReportBreakdown.displayName = 'GasReportBreakdown';

export default GasReportBreakdown;
