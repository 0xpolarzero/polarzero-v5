import { BlogPostSection } from '@/lib/types/writing';

const sections: BlogPostSection[] = [
  {
    title: 'Overview',
    slug: '',
    subsections: [],
  },
  {
    title: '[H-01] High vulnerability',
    slug: 'h-01',
    subsections: [],
  },
  {
    title: 'Analysis',
    slug: 'analysis',
    subsections: [
      {
        title: 'Overview of the protocol',
        slug: 'overview-of-the-protocol',
      },
      {
        title: 'Centralization risks',
        slug: 'centralization-risks',
      },
    ],
  },
];

export default sections;
