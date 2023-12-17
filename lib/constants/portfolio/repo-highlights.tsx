import { TOOLS } from './tools';

import { HighlightedRepo } from '@/lib/types/portfolio';

export const REPO_HIGHLIGHTS: HighlightedRepo[] = [
  {
    name: 'Storage collision',
    details: 'Challenge - Remedy',
    description: (
      <>
        How some automated testing tools can fail to discover precise storage collision exploits,
        yet why it matters (even more) to use them.
      </>
    ),
    url: 'https://github.com/0xpolarzero/storage-collision-formal-verification',
    categories: ['fuzzing/invariants', 'formal verification'],
    fuzzing: [TOOLS.foundry],
    formalVerification: [TOOLS.certora, TOOLS.halmos],
    date: new Date('2023-11'),
  },
];
