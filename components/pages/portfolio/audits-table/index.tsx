import { type FC, Fragment, useState } from 'react';

import AuditsTableDesktop from './desktop';
// import AuditsTableMobile from './mobile';
import type { Row, SortingState } from '@tanstack/react-table';

import { AUDITS_RESULTS } from '@/lib/constants/portfolio/audits';
import { Audit } from '@/lib/types/audit';

import { TableProps } from '@/components/ui/table/types';

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

export type AuditsTableInternalProps = Omit<TableProps<Audit>, 'columns'>;

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const AuditsTable: FC = () => {
  const [sorting, setSorting] = useState<SortingState>([]);

  return (
    <Fragment>
      <AuditsTableDesktop data={AUDITS_RESULTS} sorting={sorting} setSorting={setSorting} />
      {/* <AuditsTableMobile sorting={sorting} setSorting={setSorting} /> */}
    </Fragment>
  );
};

// export const getFindingRowRoute = ({ row }: { row: Row<Finding> }): `/${string}` => {
//   const { category, slug } = row.original;
//   return category === 'audit' ? `/portfolio/reports/${slug}` : `/portfolio/writeups/${slug}`;
// };

export default AuditsTable;
