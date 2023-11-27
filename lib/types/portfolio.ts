import { Category } from '@/components/templates/category-tag';

/**
 * Type for an audit (competition or solo) displayed in a feature display card
 * on [polarzero.xyz/portfolio](https://polarzero.xyz/portfolio)
 * @param protocol The protocol that was audited
 * @param date The date the audit started (month/year)
 * @param duration The duration of the audit (in days)
 * @param shortDesc The kind of protocol (e.g. lending, DEX, etc.)
 * @param categories The categories of the audit (e.g. audit competition, solo audit, formal verification, ) + of protocol (e.g. lending, DEX, etc.)
 * @param description The description of the audit (e.g. description of the process, results, links, etc.)
 * @param url The link to the report/writeup
 * @param slug A unique slug for the audit (e.g. "compound-v2")
 * @param findings The amount of findings by severity (see Finding type)
 */
export type Audit = {
  protocol: string;
  date: Date;
  duration: number;
  shortDesc: string;
  categories: Category[];
  description: string;
  url: string;
  slug: string;
  findings: Findings;
};

/**
 * Type for an audit competition displayed in a feature display card
 * on [polarzero.xyz/portfolio](https://polarzero.xyz/portfolio)
 * > Everything in Audit type, extended with:
 * @param rank The rank of the audit in the competition
 * @param platform The platform the audit was conducted on (e.g. CodeArena, Immunefi, etc.)
 */
export type AuditCompetition = Audit & {
  rank: number;
  platform: string;
};

/**
 * Type for the amount of each finding severity found in an audit
 */
export type Findings = {
  critical: number;
  high: number;
  medium: number;
  lowQa: number;
  analysis: number;
};

export const FINDING_SEVERITY = {
  critical: 'Critical',
  high: 'High',
  medium: 'Medium',
  lowQa: 'Low/QA',
  analysis: 'Analysis',
};
