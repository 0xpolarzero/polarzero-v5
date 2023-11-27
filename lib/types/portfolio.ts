import { Category } from '@/components/templates/category-tag';

/**
 * Type for an audit competition displayed in a feature display card
 * on [polarzero.xyz/portfolio](https://polarzero.xyz/portfolio)
 * @param rank The rank in the contest (if applicable)
 * @param protocol The protocol that was audited
 * @param platform The platform the audit was conducted on (e.g. CodeArena, Immunefi, etc.)
 * @param date The date the audit started (month/year)
 * @param duration The duration of the audit (in days)
 * @param shortDesc The kind of protocol (e.g. lending, DEX, etc.)
 * @param category The category of the "audit" (e.g. audit, formal verification, bug bounty)
 * @param details The details of the audit (e.g. description of the process, results, links, etc.)
 */
export type AuditCompetition = {
  rank?: number;
  protocol: string;
  platform: string;
  date: Date;
  duration: number;
  shortDesc: string;
  categories: Category[];
  details: AuditDetails;
};

/**
 * Type for the details of an audit or audit competition displayed
 *  on [polarzero.xyz/portfolio](https://polarzero.xyz/portfolio)
 * @param description The description of the audit (e.g. description of the process, results, links, etc.)
 * @param url The link to the report/writeup
 * @param slug A unique slug for the audit (e.g. "compound-v2")
 * @param category The category of the "audit" (e.g. audit, formal verification, bug bounty)
 * @param protocol The protocol that was audited
 * @param platform The platform the audit was conducted on (e.g. CodeArena, Immunefi, etc.)
 */
export type AuditDetails = {
  description: string;
  url: string;
  slug: string;
  findings: Finding[];
};

/**
 * Type for a finding found in an audit
 * @param severity The severity of the vulnerability (e.g. critical, high, medium, low/qa, analysis)
 * @param title The title of the vulnerability
 * @param url The link to the vulnerability report
 */
export type Finding = {
  severity: 'critical' | 'high' | 'medium' | 'lowQa' | 'analysis';
  title: string;
  url: string;
};

export const FINDING_SEVERITY = {
  critical: 'Critical',
  high: 'High',
  medium: 'Medium',
  lowQa: 'Low/QA',
  analysis: 'Analysis',
};
