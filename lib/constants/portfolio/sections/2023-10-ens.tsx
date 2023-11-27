import { BlogPostSection } from '@/lib/types/writing';

const sections: BlogPostSection[] = [
  {
    title: '1. Analysis: Overview',
    slug: '',
    subsections: [],
  },
  {
    title: '2. Audit approach',
    slug: 'audit-approach',
    subsections: [
      {
        title: 'First overview',
        slug: 'first-overview',
      },
      {
        title: 'Environment',
        slug: 'environment',
      },
      {
        title: 'Testing',
        slug: 'testing',
      },
      {
        title: 'Threats & invariants',
        slug: 'threats-invariants',
      },
      {
        title: 'Reports',
        slug: 'reports',
      },
    ],
  },
  {
    title: '3. Mechanism review',
    slug: 'mechanism-review',
    subsections: [
      {
        title: 'Key aspects',
        slug: 'key-aspects',
      },
      {
        title: 'Step-by-step interactions',
        slug: 'step-by-step-interactions',
      },
    ],
  },
  {
    title: '4. Architecture recommendations',
    slug: 'architecture-recommendations',
    subsections: [
      {
        title: 'Batch processing & gas usage',
        slug: 'batch-processing-gas-usage',
      },
      {
        title: 'User interface',
        slug: 'user-interface',
      },
    ],
  },
  {
    title: '5. Centralization risks',
    slug: 'centralization-risks',
    subsections: [],
  },
  {
    title: '6. Systemic risks',
    slug: 'systemic-risks',
    subsections: [
      {
        title: 'Malformed data',
        slug: 'malformed-data',
      },
      {
        title: 'Dependencies versions',
        slug: 'dependencies-versions',
      },
    ],
  },
  {
    title: '7. Conclusion',
    slug: 'conclusion',
    subsections: [],
  },
];

export default sections;
