import {
  CastleIcon,
  FileText,
  Github,
  LucideIcon,
  SparkleIcon,
  TimerIcon,
  Waves,
} from 'lucide-react';

import { ResumeAbout, ResumeAttributes, ResumeItem, ResumeTab } from '@/lib/types/resume';

import LogoIcon from '@/components/common/logo-icon';
import { Italic, Link } from '@/components/pages/resume/converters';

/**
 * Resume items, not necessarily in chronological order but grouped by year.
 */
export const RESUME_ITEMS: (options?: { pdf: boolean }) => Record<string, ResumeItem[]> = (
  options = { pdf: false },
) => ({
  /* -------------------------------------------------------------------------- */
  /*                                    2025                                    */
  /* -------------------------------------------------------------------------- */
  2025: [
    {
      status: 'library',
      categories: ['library', 'solana', 'infra'],
      title: 'DEX Indexer',
      description:
        'A fully-fledged TypeScript indexer for DEX trades on Solana using Yellowstone GRPC.',
      startDate: new Date('2024-09-20'),
      endDate: new Date('2025-01-16'),
      mainUrl: 'https://www.npmjs.com/package/@primodiumxyz/dex-indexer',
      websiteUrl: 'https://www.npmjs.com/package/@primodiumxyz/dex-indexer',
      githubUrl: 'https://github.com/primodiumxyz/dex-indexer-stack/tree/main/packages/indexer',
      stack: [
        { name: 'Yellowstone gRPC', url: 'https://github.com/rpcpool/yellowstone-grpc' },
        { name: 'QuickNode', url: 'https://www.quicknode.com/' },
      ],
      symbol: <LogoIcon.primodium />,
      starred: true,
    },
    {
      status: 'library',
      categories: ['library', 'database', 'infra'],
      title: 'DEX GraphQL',
      description:
        'A type-safe GraphQL client for querying DEX trades and tokens, built on a Hasura backend and supercharged with TimescaleDB, for optimized time-series capabilities.',
      startDate: new Date('2024-09-20'),
      endDate: new Date('2025-01-16'),
      mainUrl: 'https://www.npmjs.com/package/@primodiumxyz/dex-graphql',
      websiteUrl: 'https://www.npmjs.com/package/@primodiumxyz/dex-graphql',
      githubUrl: 'https://github.com/primodiumxyz/dex-indexer-stack/tree/main/packages/gql',
      stack: [
        { name: 'Hasura', url: 'https://hasura.io/' },
        { name: 'Timescale', url: 'https://www.timescale.com/' },
        { name: 'Postgres', url: 'https://www.postgresql.org/' },
        { name: 'GraphQL', url: 'https://graphql.org/' },
        { name: 'Redis', url: 'https://redis.io/' },
      ],
      symbol: <LogoIcon.primodium />,
      starred: true,
    },
    {
      status: 'library',
      categories: ['library', 'solana', 'ux'],
      title: 'DEX Server',
      description:
        'A TypeScript server for managing trades on Solana with Jupiter, including priority fees and transactions landing... etc TODO',
      startDate: new Date('2024-09-20'),
      endDate: new Date('2025-01-27'),
      mainUrl: 'https://www.npmjs.com/package/@primodiumxyz/dex-server',
      websiteUrl: 'https://www.npmjs.com/package/@primodiumxyz/dex-server',
      githubUrl: 'https://github.com/primodiumxyz/dex-server',
      stack: [
        { name: 'Fastify', url: 'https://fastify.dev/' },
        { name: 'Jupiter', url: 'https://station.jup.ag/docs/api' },
        { name: 'tRPC', url: 'https://trpc.io/' },
        { name: 'Redis', url: 'https://redis.io/' },
      ],
      symbol: <LogoIcon.primodium />,
    },
    {
      status: 'work',
      categories: ['solana', 'fullstack', 'mobile app', 'ux'],
      title: 'Tub',
      description:
        'A mobile trading app for memecoins on Solana with a full backend stack and curated algorithm.',
      startDate: new Date('2024-09-20'),
      endDate: new Date('2025-01-24'),
      mainUrl: 'https://tub.app',
      websiteUrl: 'https://tub.app',
      githubUrl: 'https://github.com/primodiumxyz/tub-ios',
      stack: [
        { name: 'Swift', url: 'https://swift.org' },
        { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
        { name: 'Timescale', url: 'https://www.timescale.com/' },
        { name: 'AWS', url: 'https://aws.amazon.com/' },
      ],
      symbol: <LogoIcon.primodium />,
    },
  ],
  /* -------------------------------------------------------------------------- */
  /*                                    2024                                    */
  /* -------------------------------------------------------------------------- */
  2024: [
    {
      status: 'library',
      categories: ['library', 'evm', 'ux'],
      title: 'Gasless server',
      description:
        'A TypeScript server library for creating a gasless server with MUD-compliant Ethereum smart contracts.',
      startDate: new Date('2024-07-10'),
      endDate: new Date('2024-09-04'),
      mainUrl: 'https://www.npmjs.com/package/@primodiumxyz/gasless-server',
      websiteUrl: 'https://www.npmjs.com/package/@primodiumxyz/gasless-server',
      githubUrl: 'https://github.com/primodiumxyz/gasless',
      stack: [
        { name: 'MUD', url: 'https://mud.dev' },
        { name: 'Fastify', url: 'https://fastify.dev' },
        { name: 'Redis', url: 'https://redis.io/' },
      ],
      symbol: <LogoIcon.primodium />,
    },
    {
      status: 'work',
      categories: ['evm', 'fullstack', 'onchain games', 'onchain economy'],
      title: 'Primodium Empires',
      description: 'A fully onchain, turn-based, prediction market game.',
      startDate: new Date('2024-06-28'),
      endDate: new Date('2024-09-20'),
      mainUrl: 'https://empires.primodium.com',
      websiteUrl: 'https://empires.primodium.com',
      githubUrl: 'https://github.com/primodiumxyz/empires',
      stack: [
        { name: 'MUD', url: 'https://mud.dev' },
        { name: 'Phaser 3', url: 'https://phaser.io' },
        { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
        { name: 'AWS', url: 'https://aws.amazon.com/' },
      ],
      symbol: <LogoIcon.primodium />,
    },
    {
      status: 'library',
      categories: ['library', 'fullstack', 'state management'],
      title: 'Reactive Tables',
      description:
        'A TypeScript state management library for building onchain games on top of MUD.',
      startDate: new Date('2024-04-01'),
      endDate: new Date('2024-09-13'),
      mainUrl: 'https://www.npmjs.com/package/@primodiumxyz/reactive-tables',
      websiteUrl: 'https://developer.primodium.com/reactive-tables',
      githubUrl: 'https://github.com/primodiumxyz/reactive-tables',
      stack: [
        { name: 'MUD', url: 'https://mud.dev' },
        { name: 'RxJS', url: 'https://rxjs.dev' },
        { name: 'TinyBase', url: 'https://tinybase.org' },
      ],
      symbol: <LogoIcon.primodium />,
      starred: true,
    },
    {
      status: 'work',
      categories: ['evm', 'fullstack', 'onchain games'],
      title: 'Primodium v0.11',
      description: 'A fully onchain space-based, empire building MMO game.',
      startDate: new Date('2024-04-01'),
      endDate: new Date('2024-06-28'),
      mainUrl: 'https://primodium.com',
      websiteUrl: 'https://primodium.com',
      githubUrl: 'https://github.com/primodiumxyz/primodium',
      stack: [
        { name: 'MUD', url: 'https://mud.dev' },
        { name: 'Phaser 3', url: 'https://phaser.io' },
        { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
        { name: 'AWS', url: 'https://aws.amazon.com/' },
      ],
      symbol: <LogoIcon.primodium />,
    },
    {
      status: 'company',
      categories: [],
      title: 'Primodium',
      description:
        'Fullstack software engineer at Primodium building onchain games and consumer applications.',
      startDate: new Date('2024-04-01'),
      endDate: new Date('2025-02-15'),
      mainUrl: 'https://x.com/primodiumgame',
      websiteUrl: 'https://primodium.com',
      githubUrl: 'https://github.com/primodiumxyz',
      symbol: <LogoIcon.primodium />,
    },
    {
      status: 'work',
      categories: ['evm', 'tooling', 'optimization', 'data visualization', 'fullstack'],
      title: 'savvy',
      description:
        'An interface for the EVM on the browser, to simulate & visualize onchain activity.',
      startDate: new Date('2024-02-03'),
      endDate: new Date('2024-04-01'),
      mainUrl: 'https://svvy.sh',
      websiteUrl: 'https://svvy.sh',
      githubUrl: 'https://github.com/0xpolarzero/savvy',
      stack: [
        { name: 'Tevm', url: 'https://tevm.sh' },
        { name: 'WhatsABI', url: 'https://github.com/shazow/whatsabi' },
      ],
      symbol: <LogoIcon.savvy />,
    },
    {
      status: 'contribution',
      categories: ['evm', 'tooling', 'fullstack'],
      title: 'Tevm',
      description: 'Lately with a Next.js example integrating Tevm.',
      startDate: new Date('2024-02-19'),
      endDate: new Date('2024-04-01'),
      mainUrl: 'https://github.com/evmts/tevm-monorepo/',
      githubUrl: 'https://github.com/evmts/tevm-monorepo/',
      websiteUrl: 'https://tevm.sh/',
      demoUrl: 'https://tevm-example-next.vercel.app',
      stack: [{ name: 'Tevm', url: 'https://tevm.sh' }],
    },
    {
      status: 'research-work',
      categories: ['evm', 'optimization'],
      title: 'airdrop gas benchmarks',
      description:
        'A series of tests to measure gas usage for popular airdrop patterns with various token standards and airdrop mechanisms.',
      startDate: new Date('2024-01-23'),
      endDate: new Date('2024-03-02'),
      mainUrl:
        'https://polarzero.xyz/gas-visualizer?author=0xpolarzero&repo=airdrop-gas-benchmarks',
      githubUrl: 'https://github.com/0xpolarzero/airdrop-gas-benchmarks',
      websiteUrl:
        'https://polarzero.xyz/gas-visualizer?author=0xpolarzero&repo=airdrop-gas-benchmarks',
      stack: [{ name: 'Foundry', url: 'https://getfoundry.sh/' }],
      symbol: <Github />,
    },
    {
      status: 'research-work',
      categories: ['evm', 'tooling', 'optimization'],
      title: 'gas metering comparison',
      description:
        'Measuring how various libraries/frameworks report gas usage against testnet transactions, for a specific set of calldata.',
      startDate: new Date('2024-02-17'),
      endDate: new Date('2024-02-28'),
      mainUrl: 'https://github.com/0xpolarzero/gas-metering-comparison',
      githubUrl: 'https://github.com/0xpolarzero/gas-metering-comparison',
      stack: [
        { name: 'Foundry', url: 'https://getfoundry.sh/' },
        { name: 'Hardhat', url: 'https://hardhat.org/' },
        { name: 'Tevm', url: 'https://tevm.sh' },
        { name: 'forge-gas-metering', url: 'https://github.com/emo-eth/forge-gas-metering' },
      ],
      symbol: <Github />,
    },
  ],
  /* -------------------------------------------------------------------------- */
  /*                                    2023                                    */
  /* -------------------------------------------------------------------------- */
  2023: [
    {
      status: 'contribution',
      categories: ['evm', 'tooling', 'security'],
      title: 'Glider',
      description:
        'Testing the tool from Hexens during a Secureum workshop, contributing to the documentation.',
      startDate: new Date('2023-12-05'),
      endDate: new Date('2023-12-26'),
      mainUrl: 'https://glide.r.xyz',
      websiteUrl: 'https://glide.r.xyz',
      stack: [{ name: 'Glider', url: 'https://glide.r.xyz' }],
      symbol: <LogoIcon.glider />,
    },
    {
      status: 'idea',
      categories: ['evm', 'immersive', 'spatial audio', 'music', 'NFTs', 'fullstack'],
      title: 'echoes',
      description:
        'A contemplative yet interactive collectible, made of particles, as part of an immersive audiovisual experience.',
      startDate: new Date('2023-01-30'),
      endDate: new Date('2023-02-12'),
      mainUrl: 'https://echoes.polarzero.xyz/',
      githubUrl: 'https://github.com/0xpolarzero/echoes',
      websiteUrl: 'https://echoes.polarzero.xyz/',
      stack: [
        {
          name: 'React Three Fiber',
          url: 'https://docs.pmnd.rs/react-three-fiber/getting-started/introduction',
        },
        {
          name: 'Hardhat',
          url: 'https://hardhat.org/',
        },
        {
          name: 'The Graph',
          url: 'https://thegraph.com/',
        },
      ],
      symbol: <LogoIcon.pmndrs />,
    },
    {
      status: 'idea',
      categories: ['immersive', 'data visualization', 'fullstack'],
      title: 'poligraph',
      description:
        'A 3D graph to help visualize political relationships in the French Assemblée Nationale.',
      startDate: new Date('2023-01-10'),
      endDate: new Date('2023-02-18'),
      mainUrl: 'https://poligraph.polarzero.xyz/',
      githubUrl: 'https://github.com/0xpolarzero/french-political-acquaintances-graph-3D',
      websiteUrl: 'https://poligraph.polarzero.xyz/',
      stack: [
        {
          name: 'React Three Fiber',
          url: 'https://docs.pmnd.rs/react-three-fiber/getting-started/introduction',
        },
      ],
      symbol: <LogoIcon.pmndrs />,
    },
    {
      status: 'research-work',
      categories: ['evm', 'security', 'formal verification', 'fuzzing'],
      title: 'storage collision',
      description:
        'An example of how some automated testing tools will behave with a very precise storage collision exploit.',
      startDate: new Date('2023-11-20'),
      endDate: new Date('2023-11-24'),
      mainUrl: 'https://github.com/0xpolarzero/storage-collision-formal-verification',
      githubUrl: 'https://github.com/0xpolarzero/storage-collision-formal-verification',
      stack: [
        { name: 'Foundry', url: 'https://getfoundry.sh/' },
        { name: 'Certora', url: 'https://www.certora.com/' },
        { name: 'Halmos', url: 'https://github.com/a16z/halmos' },
      ],
      symbol: <Github />,
    },
    {
      status: 'research-work',
      categories: ['evm', 'security', 'fuzzing'],
      title: 'ERC1155A',
      description: (
        <>
          Fuzzing Superform&apos;s ERC1155A, an extension of ERC1155 with extended approval and
          transmute logic.
        </>
      ),
      startDate: new Date('2023-11-28'),
      endDate: new Date('2023-12-18'),
      mainUrl: 'https://github.com/0xpolarzero/superform-erc1155a-fuzzing/',
      githubUrl: 'https://github.com/0xpolarzero/superform-erc1155a-fuzzing/',
      stack: [{ name: 'Foundry', url: 'https://getfoundry.sh/' }],
      symbol: <Github />,
    },
    {
      status: 'work',
      categories: ['immersive', 'spatial audio', 'music', 'fullstack'],
      title: 'metaverse',
      description: 'An example of 3D audio integration in a virtual world on the browser.',
      startDate: new Date('2022-04-11'),
      endDate: new Date('2023-01-03'),
      mainUrl: 'https://immersiveaudio.polarzero.xyz/',
      githubUrl: 'https://github.com/0xpolarzero/metaverse',
      stack: [
        {
          name: 'React Three Fiber',
          url: 'https://docs.pmnd.rs/react-three-fiber/getting-started/introduction',
        },
        {
          name: 'Atmoky',
          url: 'https://atmoky.com/',
        },
      ],
      symbol: <LogoIcon.pmndrs />,
    },
    {
      status: 'hackathon',
      categories: ['evm', 'tooling', 'fullstack'],
      title: 'cascade',
      description:
        '(Just another attempt at a) decentralized automated crowdfunding platform, with automated and flexible recurring payments.',
      startDate: new Date('2023-05-22'),
      endDate: new Date('2023-06-11'),
      mainUrl: 'https://devpost.com/software/cascade-u14fdb',
      githubUrl: 'https://github.com/0xpolarzero/decentralized-autonomous-crownfunding',
      websiteUrl: 'https://devpost.com/software/cascade-u14fdb',
      demoUrl: 'https://youtu.be/4tHtIcdVorY',
      stack: [
        {
          name: 'Hardhat',
          url: 'https://hardhat.org/',
        },
        {
          name: 'Chainlink Automation',
          url: 'https://chain.link/automation',
        },
        {
          name: 'The Graph',
          url: 'https://thegraph.com/',
        },
      ],
      symbol: <Waves />,
    },
    {
      status: 'idea',
      categories: ['immersive', 'music', 'NFTs', 'fullstack'],
      title: 'esthesis',
      description: 'An immersive 3D visualizer for music NFTs across different platforms',
      startDate: new Date('2023-02-22'),
      endDate: new Date('2023-05-22'),
      mainUrl: 'https://esthesis.polarzero.xyz/',
      githubUrl: 'https://github.com/0xpolarzero/esthesis',
      websiteUrl: 'https://esthesis.polarzero.xyz/',
      stack: [
        {
          name: 'React Three Fiber',
          url: 'https://docs.pmnd.rs/react-three-fiber/getting-started/introduction',
        },
        {
          name: 'spinamp',
          url: 'https://www.spinamp.xyz/',
        },
      ],
      symbol: <LogoIcon.pmndrs />,
    },
    {
      status: 'contribution',
      categories: ['evm', 'tooling', 'fullstack'],
      title: 'Chainlink Functions',
      description: (
        <>
          Testing Chainlink Functions during Alpha (01-03/2023) and Beta (09/2023); provided some
          now outdated examples:{' '}
          <Link
            className="font-medium hover:underline"
            href="https://github.com/0xpolarzero/chainlink-functions-next-starter"
            pdf={options.pdf}
          >
            Next.js starter
          </Link>
          ,{' '}
          <Link
            className="font-medium hover:underline"
            href="https://github.com/0xpolarzero/cross-chain-ERC20-balance-verification"
            pdf={options.pdf}
          >
            cross-chain aggregation
          </Link>
          ,{' '}
          <Link
            className="font-medium hover:underline"
            href="https://github.com/0xpolarzero/twitter-verifier-chainlink-functions"
            pdf={options.pdf}
          >
            onchain Twitter verifier
          </Link>
          .
        </>
      ),
      startDate: new Date('2023-01-23'),
      endDate: new Date('2023-03-07'),
      mainUrl: 'https://youtu.be/N5jvHRSJVME',
      websiteUrl: 'https://chain.link/functions',
      demoUrl: 'https://youtu.be/N5jvHRSJVME',
      stack: [
        {
          name: 'Chainlink Functions',
          url: 'https://chain.link/functions',
        },
      ],
      symbol: <LogoIcon.chainlink />,
    },
    {
      status: 'course',
      categories: ['evm'],
      title: 'Alchemy University',
      description:
        'A seven-week Ethereum bootcamp; cryptography fundamentals, data structures, UTXO/account-based models, smart contracts...',
      startDate: new Date('2023-01-03'),
      endDate: new Date('2023-02-12'),
      mainUrl: 'https://university.alchemy.com/overview/ethereum',
      githubUrl: 'https://github.com/0xpolarzero/AU-ethereum-bootcamp',
      stack: [{ name: 'Alchemy', url: 'https://alchemy.com/' }],
    },
    {
      status: 'writing',
      categories: ['evm', 'education'],
      title: 'Blockchain, but for real',
      description:
        'Some explanations about blockchain: current perception, what is it actually, how it works, perspectives for the future, and what to do now.',
      startDate: new Date('2023-10-27'),
      endDate: new Date('2023-11-07'),
      mainUrl: 'https://medium.com/@0xpolarzero/blockchain-but-for-real-e1d8c0e0ebfc',
      articleUrl: 'https://medium.com/@0xpolarzero/blockchain-but-for-real-e1d8c0e0ebfc',
      websiteUrl: '/writing/blog/blockchain-but-for-real',
      stack: [
        { name: 'Medium', url: 'https://medium.com/@0xpolarzero' },
        { name: 'EN' },
        { name: '~19 min read' },
      ],
      slug: 'blockchain-but-for-real',
      symbol: <LogoIcon.Medium />,
    },
    {
      status: 'writing',
      categories: ['evm', 'education'],
      title: 'La blockchain, mais pour de vrai',
      description: (
        <>
          Quelques explications sur la blockchain : perceptions actuelles, ce que c&apos;est
          réellement, fonctionnement, perspectives futures, ce qu&apos;on peut faire maintenant...
        </>
      ),
      startDate: new Date('2023-10-27'),
      endDate: new Date('2023-11-07'),
      mainUrl: 'https://medium.com/@0xpolarzero/la-blockchain-mais-pour-de-vrai-0fed9b951af9',
      articleUrl: 'https://medium.com/@0xpolarzero/la-blockchain-mais-pour-de-vrai-0fed9b951af9',
      websiteUrl: '/writing/blog/blockchain-mais-pour-de-vrai',
      stack: [
        { name: 'Medium', url: 'https://medium.com/@0xpolarzero' },
        { name: 'FR' },
        { name: '~22 min read' },
      ],
      slug: 'blockchain-mais-pour-de-vrai',
      symbol: <LogoIcon.Medium />,
    },
    {
      status: 'writing',
      categories: ['evm', 'education'],
      title: 'Decentralized systems, End the Cycle of Indifference',
      description:
        'How traditional democracies tend to favor indifference, through delegation of knowledge and awareness, and how decentralized systems can help by incentivizing active participation in governance.',
      startDate: new Date('2023-10-12'),
      endDate: new Date('2023-10-17'),
      mainUrl:
        'https://medium.com/@0xpolarzero/decentralized-systems-end-the-cycle-of-indifference-8c19d7167778',
      articleUrl:
        'https://medium.com/@0xpolarzero/decentralized-systems-end-the-cycle-of-indifference-8c19d7167778',
      websiteUrl: '/writing/blog/decentralized-systems-end-the-cycle-of-indifference',
      stack: [
        { name: 'Medium', url: 'https://medium.com/@0xpolarzero' },
        { name: 'EN' },
        { name: '~16 min read' },
      ],
      slug: 'decentralized-systems-end-the-cycle-of-indifference',
      symbol: <LogoIcon.Medium />,
    },
    {
      status: 'writing',
      categories: ['evm', 'tooling'],
      title: "Chainlink's New Dawn",
      description: (
        <>
          A reflection on Chainlink&apos;s latest milestones, and key aspects from a
          developer&apos;s perspective.
        </>
      ),
      startDate: new Date('2023-09-22'),
      endDate: new Date('2023-10-02'),
      mainUrl: 'https://medium.com/@0xpolarzero/chainlinks-new-dawn-725d7a6881cb',
      articleUrl: 'https://medium.com/@0xpolarzero/chainlinks-new-dawn-725d7a6881cb',
      websiteUrl: '/writing/blog/chainlink-new-dawn',
      stack: [
        { name: 'Medium', url: 'https://medium.com/@0xpolarzero' },
        { name: 'EN' },
        { name: '~6 min read' },
      ],
      slug: 'chainlink-new-dawn',
      symbol: <LogoIcon.Medium />,
    },
    {
      status: 'writing',
      categories: ['evm', 'security', 'education'],
      title: 'Smart Contract Security, Terminology of a Review',
      description: (
        <>
          Navigating the rambling world of smart contract security, and specifically the
          terminology/technical jargon, from the perspective of a newcomer.
        </>
      ),
      startDate: new Date('2023-09-17'),
      endDate: new Date('2023-09-18'),
      mainUrl:
        'https://medium.com/@0xpolarzero/smart-contract-security-terminology-of-a-review-99b9203c9824',
      articleUrl:
        'https://medium.com/@0xpolarzero/smart-contract-security-terminology-of-a-review-99b9203c9824',
      websiteUrl: '/writing/blog/smart-contract-security-terminology-of-a-review',
      stack: [
        { name: 'Medium', url: 'https://medium.com/@0xpolarzero' },
        { name: 'EN' },
        { name: '~4 min read' },
      ],
      slug: 'smart-contract-security-terminology-of-a-review',
      symbol: <LogoIcon.Medium />,
    },
    {
      status: 'writing',
      categories: ['evm', 'education'],
      title: 'Lesson #0, Fundamentals of Solidity Storage',
      description:
        'The storage layout in the EVM, how data is meticulously stored and managed with Solidity.',
      startDate: new Date('2023-06-28'),
      endDate: new Date('2023-06-29'),
      mainUrl: 'https://medium.com/@0xpolarzero/fundamentals-of-solidity-storage-581ba0551b3',
      articleUrl: 'https://medium.com/@0xpolarzero/fundamentals-of-solidity-storage-581ba0551b3',
      websiteUrl: '/writing/blog/lesson-0-fundamentals-of-solidity-storage',
      stack: [
        { name: 'Medium', url: 'https://medium.com/@0xpolarzero' },
        { name: 'EN' },
        { name: '~7 min read' },
      ],
      slug: 'lesson-0-fundamentals-of-solidity-storage',
      symbol: <LogoIcon.Medium />,
    },
  ],
  /* -------------------------------------------------------------------------- */
  /*                                    2022                                    */
  /* -------------------------------------------------------------------------- */
  2022: [
    {
      status: 'hackathon',
      categories: ['evm', 'tooling', 'fullstack'],
      title: 'promise',
      description: (
        <>
          Built to help improve trust in our digital relationships and make founders more
          accountable for their promises;{' '}
          <Italic pdf={options.pdf}>Chainlink Top Quality Projects, QuickNode 1st Prize</Italic>.
        </>
      ),
      startDate: new Date('2022-10-17'),
      endDate: new Date('2022-11-19'),
      mainUrl: 'https://devpost.com/software/promise-erftax',
      githubUrl: 'https://github.com/0xpolarzero/chainlink-fall-2022-hackathon',
      websiteUrl: 'https://devpost.com/software/promise-erftax',
      demoUrl: 'https://youtu.be/6TQf_QUu8K8',
      documentationUrl: 'https://polarzero.gitbook.io/promise',
      stack: [
        {
          name: 'Hardhat',
          url: 'https://hardhat.org/',
        },
        {
          name: 'Chainlink Automation',
          url: 'https://chain.link/automation',
        },
        {
          name: 'The Graph',
          url: 'https://thegraph.com/',
        },
      ],
      symbol: <LogoIcon.promise className="h-6 w-8" />,
    },
    {
      status: 'course',
      categories: ['immersive'],
      title: 'Three.js Journey',
      description:
        'An extensive introduction to Web-based 3D with WebGL, using Three.js and React Three Fiber: physics, modeling, interactions, shaders, post-processing, optimization, R3F and Drei...',
      startDate: new Date('2022-11-27'),
      endDate: new Date('2022-12-06'),
      mainUrl: 'https://threejs-journey.xyz/',
      githubUrl: 'https://github.com/0xpolarzero/three-js-journey',
      stack: [{ name: 'Bruno Simon', url: 'https://twitter.com/bruno_simon' }],
    },
    {
      status: 'course',
      categories: ['evm', 'fullstack'],
      title: '"Full blockchain Solidity/JavaScript course"',
      description:
        'A comprehensive introduction to all the core concepts related to blockchain, and developing smart contracts with JavaScript and Solidity.',
      startDate: new Date('2022-09-23'),
      endDate: new Date('2022-10-15'),
      mainUrl: 'https://github.com/smartcontractkit/full-blockchain-solidity-course-js',
      githubUrl: 'https://github.com/0xpolarzero/full-blockchain-solidity-course-js',
      stack: [{ name: 'Patrick Collins', url: 'https://twitter.com/PatrickAlphaC/' }],
    },
    {
      status: 'course',
      categories: ['javascript', 'fullstack'],
      title: 'The Odin Project, full stack curriculum',
      description:
        'An open-source curriculum for learning web development with JavaScript, Node.js, Express, MongoDB, React...',
      startDate: new Date('2022-02-05'),
      endDate: new Date('2022-06-12'),
      mainUrl: 'https://www.theodinproject.com/',
      stack: [{ name: 'The Odin Project', url: 'https://www.theodinproject.com/' }],
    },
    {
      status: 'education',
      categories: ['spatial audio'],
      title: 'Master in Music and Music Production',
      description:
        'Sound engineering, music theory, mixing, mastering, arrangement and orchestration...',
      startDate: new Date('2020-09-14'),
      endDate: new Date('2022-07-07'),
      mainUrl: 'https://www.sae.edu/fra/courses/master-musique/',
      stack: [
        { name: 'France', url: 'https://maps.app.goo.gl/LLHVwhmRDZfe6JAj9' },
        { name: 'SAE Institute', url: 'https://www.sae.edu/fra/' },
        { name: 'Université Gustave Eiffel', url: 'https://www.univ-gustave-eiffel.fr/' },
      ],
    },
    {
      status: 'writing',
      categories: ['immersive', 'education'],
      title: 'What is the metaverse anyway?',
      description: 'Breaking through some of the most common misconceptions.',
      startDate: new Date('2022-05-10'),
      endDate: new Date('2022-05-14'),
      mainUrl: 'https://blog.polarzero.xyz/what-is-the-metaverse-anyway',
      articleUrl: 'https://blog.polarzero.xyz/what-is-the-metaverse-anyway',
      websiteUrl: '/writing/blog/what-is-the-metaverse-anyway',
      stack: [
        { name: 'Hashnode', url: 'https://blog.polarzero.xyz/' },
        { name: 'EN' },
        { name: '~11 min read' },
      ],
      slug: 'what-is-the-metaverse-anyway',
      symbol: <LogoIcon.Hashnode />,
    },
    {
      status: 'research-education',
      categories: ['immersive', 'music', 'spatial audio', 'NFTs', 'education'],
      title: "L'audio immersif dans les mondes virtuels",
      description:
        'Une place pour l’audio immersif dans le Web 3.0 : intégration dans le métavers; adaptation à un nouveau modèle, immersion dans un espace en pleine expansion, expériences immersives accessibles et avancées...',
      startDate: new Date('2022-02-25'),
      endDate: new Date('2022-07-07'),
      mainUrl: 'https://drive.google.com/file/d/1r0_ZjVGLb32tfxoBmrERJypyCV6No36u/view',
      articleUrl:
        'https://polarzero.notion.site/M-moire-de-M2-Antton-Lepretre-51e31e37f8124a09a948322dac59a124',
      documentationUrl: 'https://drive.google.com/file/d/1r0_ZjVGLb32tfxoBmrERJypyCV6No36u/view',
      stack: [
        {
          name: 'SAE Institute',
          url: 'https://www.sae.edu/fra/',
        },
        { name: 'Université Gustave Eiffel', url: 'https://www.univ-gustave-eiffel.fr/' },
        { name: 'Research paper' },
        { name: 'FR' },
        { name: '~painfully long read' },
      ],
      symbol: <FileText />,
    },
  ],
  /* -------------------------------------------------------------------------- */
  /*                                    2020                                    */
  /* -------------------------------------------------------------------------- */
  2020: [
    {
      status: 'education',
      categories: ['music'],
      title: 'Bachelor in Music and Sound Engineering',
      description:
        'Musicology, harmony, acoustics, history of music, audio engineering, sound design...',
      startDate: new Date('2019-09-16'),
      endDate: new Date('2020-06-30'),
      mainUrl: 'https://lact.univ-gustave-eiffel.fr/formations/licences/musique-et-metiers-du-son',
      stack: [
        { name: 'France', url: 'https://maps.app.goo.gl/sgJGxF5e8h9jfQ618' },
        { name: 'Université Gustave Eiffel', url: 'https://www.univ-gustave-eiffel.fr/' },
      ],
    },
  ],
  /* -------------------------------------------------------------------------- */
  /*                                    2019                                    */
  /* -------------------------------------------------------------------------- */
  2019: [
    {
      status: 'education',
      categories: ['music'],
      title: 'Advanced Technician Certificate in Audiovisual Production',
      description: (
        <>
          Majoring in Sound Engineering; audio recording, sound design, post-production (editing,
          mixing), applied physics and acoustics... (~Associate&apos;s degree)
        </>
      ),
      startDate: new Date('2017-09-08'),
      endDate: new Date('2019-06-30'),
      mainUrl: 'https://suger.fr/?page_id=638',
      stack: [
        { name: 'France', url: 'https://maps.app.goo.gl/i8jKHes1ddB4LDvG7' },
        { name: 'Lycée Suger', url: 'https://suger.fr/' },
      ],
    },
  ],
});

/**
 * Mapping from category to both its color and its labels.
 */
export const RESUME_ATTRIBUTES: ResumeAttributes = {
  company: {
    intent: 'primary', // blue
    labels: ['working at', 'worked at'],
  },
  work: {
    intent: 'primary', // blue
    labels: ['working on', 'worked on'],
  },
  library: {
    intent: 'fail', // red
    labels: ['shipping', 'shipped'],
  },
  writing: {
    intent: 'warning', // yellow
    labels: ['writing', 'wrote'],
  },
  contribution: {
    intent: 'success', // green
    labels: ['contributing to', 'contributed to'],
  },
  idea: {
    intent: 'none',
    labels: ['experimenting with', 'experimented with'],
  },
  hackathon: {
    intent: 'fail', // red
    labels: ['hacking on', 'hacked on'],
  },
  education: {
    intent: 'orange', // red
    labels: ['studying', 'studied'],
  },
  course: {
    intent: 'fail', // red
    labels: ['learning', 'learned'],
  },
  'research-work': {
    intent: 'orange',
    labels: ['researching', 'researched on'],
  },
  'research-education': {
    intent: 'orange',
    labels: ['researching', 'researched on'],
  },
};

/**
 * Tabs to filter resume items.
 */
export const RESUME_TABS: Record<ResumeTab, ResumeItem['status'][]> = {
  work: ['company', 'work', 'library', 'contribution', 'research-work', 'idea', 'hackathon'],
  writing: ['writing', 'research-education'],
  education: ['education', 'course'],
  me: [],
};

/**
 * About section of the resume (me).
 */
export const RESUME_ABOUT: ResumeAbout = {
  name: 'Antton',
  age: (new Date().getTime() - new Date('1998-12-04').getTime()) / 1000 / 60 / 60 / 24 / 365.25,
  location: (
    <div className="flex flex-col gap-1">
      <span>Paris, France (UTC+1)</span>
      <span className="text-muted-foreground">Florence, Italy</span>
    </div>
  ),
  locationMin: 'Paris, France (UTC+1)',
};

/**
 * Showcased versions of the website in descending order.
 */
export const WEBSITE_VERSIONS: { url: string; label: string; icon: LucideIcon }[] = [
  { url: '/', label: 'current', icon: SparkleIcon },
  { url: 'https://polarzero-v4.vercel.app', label: 'v-1', icon: TimerIcon },
  { url: 'https://polarzero-v3.vercel.app', label: 'v-2', icon: CastleIcon },
];
