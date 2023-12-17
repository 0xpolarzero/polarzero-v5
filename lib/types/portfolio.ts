import { ReactNode } from 'react';

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
  description: string | React.ReactNode;
  url: string;
  slug: string;
  findings: Findings;
  // competition (or solo audit on a platform)
  rank?: number;
  platform?: string;
};

/**
 * Type for the amount of each finding severity found in an audit
 */
export type Findings = Record<FindingSeverity, number>;

export const FINDING_SEVERITY: Record<FindingSeverity, string> = {
  critical: 'Critical',
  high: 'High',
  medium: 'Medium',
  lowQa: 'Low/QA',
  low: 'Low',
  analysis: 'Analysis',
};

/**
 * Type for a bug bounty displayed in a feature display card
 * on [polarzero.xyz/portfolio](https://polarzero.xyz/portfolio)
 * @param protocol The protocol that was impacted
 * @platform The platform the bug bounty was conducted on (e.g. Immunefi, Gitcoin, etc.)
 * @param date The date the bug was reported (month/year)
 * @param shortDesc The kind of protocol (e.g. lending, DEX, etc.)
 * @param categories The categories of the protocol (e.g. lending, DEX, etc.)
 * @param description The description of the process to discover the bug
 * @param url The link to the report/writeup
 * @param slug A unique slug for the bug bounty (e.g. "2023-07-compound-v2")
 * @param finding The details of the finding (see BountyFinding type)
 */
export type BugBounty = {
  protocol: string;
  platform?: string;
  date: Date;
  shortDesc: string;
  categories: Category[];
  description: string;
  url: string;
  slug: string;
  finding: BountyFinding;
};

/**
 * Type for the details of a bug bounty finding
 * @param severity The severity of the finding (e.g. critical, high, medium, low)
 * @param reward The reward for the finding (in USD)
 * @param title The title of the finding
 * @param description A short description of the vulnerability
 */
export type BountyFinding = {
  severity: FindingSeverity;
  reward: number;
  title: string;
  description: string;
};

/**
 * Type for the severity of a finding
 */
export type FindingSeverity = 'critical' | 'high' | 'medium' | 'low' | 'lowQa' | 'analysis';

/**
 * Type for a highlighted repository (mostly a fuzzing or formal verification campaign)
 */
export type HighlightedRepo = {
  name: string;
  details: string;
  description: ReactNode;
  url: string;
  categories: Category[];
  fuzzing?: Tool[];
  formalVerification?: Tool[];
  date: Date;
};

/**
 * Type for a tool used in a fuzzing or formal verification campaign
 */
export type Tool = {
  name: 'Foundry' | 'Echidna' | 'Medusa' | 'Certora' | 'Halmos';
  url: string;
};
