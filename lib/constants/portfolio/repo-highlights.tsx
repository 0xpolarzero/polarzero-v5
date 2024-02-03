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
  {
    name: 'Mantle LSP Staking',
    details: 'Bug bounty',
    description: (
      <div>
        Fuzzing and formally verifying Mantle LSP Staking contract, to try to optimize for the
        highest extracted ETH and mETH value, as part of their bug bounty program.
      </div>
    ),
    url: 'https://github.com/0xpolarzero/mantle-lsp-fuzzing-formal-verification',
    categories: ['fuzzing/invariants', 'formal verification'],
    fuzzing: [TOOLS.echidna],
    formalVerification: [TOOLS.halmos],
    date: new Date('2023-12'),
    protocol: 'Mantle LSP',
  },
  {
    name: 'Superform ERC1155A',
    details: 'Fuzzing campaign - audit competition',
    description: (
      <div>
        <p>Fuzzing Superform ERC-1155 extension with a naive method.</p>
        <p>
          Meaning, using different degrees of control across the handlers (loose, strict,
          discriminate). See the repo for more details.
        </p>
      </div>
    ),
    url: 'https://github.com/0xpolarzero/superform-erc1155a-fuzzing',
    categories: ['fuzzing/invariants'],
    fuzzing: [TOOLS.foundry],
    formalVerification: [],
    date: new Date('2023-11'),
    protocol: 'Superform',
  },
  {
    name: 'Airdrop patterns and solutions',
    details: 'Gas benchmarks',
    description: (
      <div>
        <p>
          Measuring gas usage for popular airdrop patterns with various token standards and airdrop
          mechanisms.
        </p>
        <p>Including native tokens, ERC20, ERC721 and ERC1155.</p>
      </div>
    ),
    url: 'https://github.com/0xpolarzero/airdrop-gas-benchmarks',
    categories: ['analysis'],
    fuzzing: [TOOLS.foundry],
    formalVerification: [],
    date: new Date('2024-01'),
  },
];
