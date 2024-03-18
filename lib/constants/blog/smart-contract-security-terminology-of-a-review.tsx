import { BlogPostSection } from '@/lib/types/blog-post';

const sections: BlogPostSection[] = [
  {
    title: 'Overview',
    slug: '',
    subsections: [],
  },
  {
    title: '1. The Power of Words: “Security Reviews” vs. “Security Audits”',
    slug: '1-the-power-of-words-security-reviews-vs-security-audits-',
    subsections: [
      {
        title: 'Why “Security Reviews” Resonate Better',
        slug: 'why-security-reviews-resonate-better',
      },
      { title: 'The Cultural Shift', slug: 'the-cultural-shift' },
    ],
  },
  {
    title: '2. The Toolbox: Understanding Key Techniques',
    slug: '2-the-toolbox-understanding-key-techniques',
    subsections: [
      {
        title: 'Static Analysis: Preliminary Code Assessment',
        slug: 'static-analysis-preliminary-code-assessment',
      },
      { title: 'Fuzzing: Random Testing Techniques', slug: 'fuzzing-random-testing-techniques' },
      {
        title:
          'Symbolic Execution and Formal Verification: Mathematical Approaches to Code Validation',
        slug: 'symbolic-execution-and-formal-verification-mathematical-approaches-to-code-validation',
      },
      {
        title: 'The FREI-PI Pattern: A Holistic Perspective on Smart Contract Integrity',
        slug: 'the-frei-pi-pattern-a-holistic-perspective-on-smart-contract-integrity',
      },
      { title: 'The Synergy of Techniques', slug: 'the-synergy-of-techniques' },
    ],
  },
  {
    title: '3. Wrapping Up',
    slug: '3-wrapping-up',
    subsections: [],
  },
  {
    title: '4. References',
    slug: '4-references',
    subsections: [],
  },
];

export default sections;
