import { ReactNode } from 'react';

import { BadgeProps } from '@/components/ui/badge/types';

/**
 * Type for a resume item displayed both in the resume page and pdf.
 * This is used for all categories (work, writing, education, etc.)
 */
export type ResumeItem = {
  status:
    | 'work'
    | 'contribution'
    | 'writing'
    | 'idea'
    | 'hackathon'
    | 'education'
    | 'course'
    | 'research-work'
    | 'research-education';
  categories: string[];
  title: string;
  description: ReactNode | string;
  startDate: Date;
  endDate?: Date;
  mainUrl: string;
  websiteUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  documentationUrl?: string;
  articleUrl?: string;
  slug?: string;
  stack?: { name: string; url?: string }[];
  symbol?: JSX.Element;
  starred?: boolean;
};

/**
 * Type for the attributes mapping (e.g. work + endDate? => working on | worked on)
 */
export type ResumeAttributes = Record<
  ResumeItem['status'],
  {
    labels: {
      0: string;
      1: string;
    };
    intent: BadgeProps['intent'];
  }
>;

/**
 * Type for the about section of the resume
 */
export type ResumeAbout = {
  name: string;
  age: number;
  location: ReactNode;
  locationMin: string;
  like: {
    value: string;
    intent: BadgeProps['intent'];
  }[];
};

/**
 * Type for the resume tab (relevant for the resume page)
 */
export type ResumeTab = 'work' | 'writing' | 'education' | 'me';
