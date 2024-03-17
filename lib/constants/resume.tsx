import { CastleIcon, LucideIcon, SparkleIcon, TimerIcon } from 'lucide-react';

import { ResumeAbout, ResumeAttributes, ResumeItem, ResumeTab } from '@/lib/types/resume';

import { Italic, Link } from '@/components/pages/resume/converters';

/**
 * Resume items, not necessarily in chronological order but grouped by year.
 */
export const RESUME_ITEMS: (options?: { pdf: boolean }) => Record<string, ResumeItem[]> = (
  options = { pdf: false },
) => ({
  /* -------------------------------------------------------------------------- */
  /*                                    2024                                    */
  /* -------------------------------------------------------------------------- */
  2024: [
    {
      status: 'work',
      title: 'savvy',
      description:
        'an interface for the EVM on the browser, to simulate & visualize onchain activity.',
      startDate: new Date('2024-02-03'),
      mainUrl: 'https://svvy.sh',
      websiteUrl: 'https://svvy.sh',
      githubUrl: 'https://github.com/0xpolarzero/savvy',
      stack: [
        { name: 'Tevm', url: 'https://tevm.sh' },
        { name: 'WhatsABI', url: 'https://github.com/shazow/whatsabi' },
      ],
    },
    {
      status: 'contribution',
      title: 'Tevm',
      description: 'lately with a Next.js example integrating Tevm.',
      startDate: new Date('2024-02-19'),
      mainUrl: 'https://github.com/evmts/tevm-monorepo/',
      githubUrl: 'https://github.com/evmts/tevm-monorepo/',
      websiteUrl: 'https://tevm.sh/',
      demoUrl: 'https://tevm-example-next.vercel.app',
      stack: [{ name: 'Tevm', url: 'https://tevm.sh' }],
    },
    {
      status: 'research-work',
      title: 'airdrop gas benchmarks',
      description:
        'a series of tests to measure gas usage for popular airdrop patterns with various token standards and airdrop mechanisms.',
      startDate: new Date('2024-01-23'),
      endDate: new Date('2024-03-02'),
      mainUrl:
        'https://polarzero.xyz/gas-visualizer?author=0xpolarzero&repo=airdrop-gas-benchmarks',
      githubUrl: 'https://github.com/0xpolarzero/airdrop-gas-benchmarks',
      websiteUrl:
        'https://polarzero.xyz/gas-visualizer?author=0xpolarzero&repo=airdrop-gas-benchmarks',
      stack: [{ name: 'Foundry', url: 'https://getfoundry.sh/' }],
    },
    {
      status: 'research-work',
      title: 'gas metering comparison',
      description:
        'measuring how various libraries/frameworks report gas usage against testnet transactions, for a specific set of calldata.',
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
    },
  ],
  /* -------------------------------------------------------------------------- */
  /*                                    2023                                    */
  /* -------------------------------------------------------------------------- */
  2023: [
    {
      status: 'contribution',
      title: 'Glider',
      description:
        'testing the tool from Hexens during a Secureum workshop, contributing to the documentation.',
      startDate: new Date('2023-12-05'),
      endDate: new Date('2023-12-26'),
      mainUrl: 'https://glide.r.xyz',
      websiteUrl: 'https://glide.r.xyz',
      stack: [{ name: 'Glider', url: 'https://glide.r.xyz' }],
    },
    {
      status: 'idea',
      title: 'echoes',
      description:
        'a contemplative yet interactive collectible, made of particles, as part of an immersive audiovisual experience.',
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
    },
    {
      status: 'idea',
      title: 'poligraph',
      description:
        'a 3D graph to help visualize political relationships in the French Assemblée Nationale.',
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
    },
    {
      status: 'research-work',
      title: 'storage collision',
      description:
        'an example of how some automated testing tools will behave with a very precise storage collision exploit.',
      startDate: new Date('2023-11-20'),
      endDate: new Date('2023-11-24'),
      mainUrl: 'https://github.com/0xpolarzero/storage-collision-formal-verification',
      githubUrl: 'https://github.com/0xpolarzero/storage-collision-formal-verification',
      stack: [
        { name: 'Foundry', url: 'https://getfoundry.sh/' },
        { name: 'Certora', url: 'https://www.certora.com/' },
        { name: 'Halmos', url: 'https://github.com/a16z/halmos' },
      ],
    },
    {
      status: 'research-work',
      title: 'ERC1155A',
      description: (
        <>
          fuzzing Superform&apos;s ERC1155A, an extension of ERC1155 with extended approval and
          transmute logic.
        </>
      ),
      startDate: new Date('2023-11-28'),
      endDate: new Date('2023-12-18'),
      mainUrl: 'https://github.com/0xpolarzero/superform-erc1155a-fuzzing/',
      githubUrl: 'https://github.com/0xpolarzero/superform-erc1155a-fuzzing/',
      stack: [{ name: 'Foundry', url: 'https://getfoundry.sh/' }],
    },
    {
      status: 'work',
      title: 'metaverse',
      description: 'an example of 3D audio integration in a virtual world on the browser.',
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
    },
    {
      status: 'hackathon',
      title: 'cascade',
      description:
        '(just another attempt at a) decentralized automated crowdfunding platform, with automated and flexible recurring payments.',
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
    },
    {
      status: 'idea',
      title: 'esthesis',
      description: 'an immersive 3D visualizer for music NFTs across different platforms',
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
    },
    {
      status: 'contribution',
      title: 'Chainlink Functions',
      description: (
        <>
          testing Chainlink Functions during Alpha (01-03/2023) and Beta (09/2023); provided some
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
    },
    {
      status: 'course',
      title: 'Alchemy University',
      description:
        'a seven-week Ethereum bootcamp; cryptography fundamentals, data structures, UTXO/account-based models, smart contracts...',
      startDate: new Date('2023-01-03'),
      endDate: new Date('2023-02-12'),
      mainUrl: 'https://university.alchemy.com/overview/ethereum',
      githubUrl: 'https://github.com/0xpolarzero/AU-ethereum-bootcamp',
      stack: [{ name: 'Alchemy', url: 'https://alchemy.com/' }],
    },
    {
      status: 'writing',
      title: 'Blockchain, but for real',
      description:
        'some explanations about blockchain: current perception, what is it actually, how it works, perspectives for the future, and what to do now.',
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
    },
    {
      status: 'writing',
      title: 'La blockchain, mais pour de vrai',
      description: (
        <>
          quelques explications sur la blockchain : perceptions actuelles, ce que c&apos;est
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
    },
    {
      status: 'writing',
      title: 'Decentralized systems, End the Cycle of Indifference',
      description:
        'how traditional democracies tend to favor indifference, through delegation of knowledge and awareness, and how decentralized systems can help by incentivizing active participation in governance.',
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
    },
    {
      status: 'writing',
      title: "Chainlink's New Dawn",
      description: (
        <>
          a reflection on Chainlink&apos;s latest milestones, and key aspects from a
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
    },
    {
      status: 'writing',
      title: 'Smart Contract Security, Terminology of a Review',
      description: (
        <>
          navigating the rambling world of smart contract security, and specifically the
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
    },
    {
      status: 'writing',
      title: 'Lesson #0, Fundamentals of Solidity Storage',
      description:
        'the storage layout in the EVM, how data is meticulously stored and managed with Solidity.',
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
    },
  ],
  /* -------------------------------------------------------------------------- */
  /*                                    2022                                    */
  /* -------------------------------------------------------------------------- */
  2022: [
    {
      status: 'hackathon',
      title: 'promise',
      description: (
        <>
          built to help improve trust in our digital relationships and make founders more
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
    },
    {
      status: 'course',
      title: 'Three.js Journey',
      description:
        'an extensive introduction to Web-based 3D with WebGL, using Three.js and React Three Fiber: physics, modeling, interactions, shaders, post-processing, optimization, R3F and Drei...',
      startDate: new Date('2022-11-27'),
      endDate: new Date('2022-12-06'),
      mainUrl: 'https://threejs-journey.xyz/',
      githubUrl: 'https://github.com/0xpolarzero/three-js-journey',
      stack: [{ name: 'Bruno Simon', url: 'https://twitter.com/bruno_simon' }],
    },
    {
      status: 'course',
      title: '"Full blockchain Solidity/JavaScript course"',
      description:
        'a comprehensive introduction to all the core concepts related to blockchain, and developing smart contracts with JavaScript and Solidity.',
      startDate: new Date('2022-09-23'),
      endDate: new Date('2022-10-15'),
      mainUrl: 'https://github.com/smartcontractkit/full-blockchain-solidity-course-js',
      githubUrl: 'https://github.com/0xpolarzero/full-blockchain-solidity-course-js',
      stack: [{ name: 'Patrick Collins', url: 'https://twitter.com/PatrickAlphaC/' }],
    },
    {
      status: 'course',
      title: 'The Odin Project, full stack curriculum',
      description:
        'an open-source curriculum for learning web development with JavaScript, Node.js, Express, MongoDB, React...',
      startDate: new Date('2022-02-05'),
      endDate: new Date('2022-06-12'),
      mainUrl: 'https://www.theodinproject.com/',
      stack: [{ name: 'The Odin Project', url: 'https://www.theodinproject.com/' }],
    },
    {
      status: 'education',
      title: 'Master in Music and Music Production',
      description:
        'sound engineering, music theory, mixing, mastering, arrangement and orchestration...',
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
      title: 'What is the metaverse anyway?',
      description: 'breaking through some of the most common misconceptions.',
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
    },
    {
      status: 'research-education',
      title: "L'audio immersif dans les mondes virtuels",
      description:
        'une place pour l’audio immersif dans le Web 3.0 : intégration dans le métavers; adaptation à un nouveau modèle, immersion dans un espace en pleine expansion, expériences immersives accessibles et avancées...',
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
    },
  ],
  /* -------------------------------------------------------------------------- */
  /*                                    2020                                    */
  /* -------------------------------------------------------------------------- */
  2020: [
    {
      status: 'education',
      title: 'Bachelor in Music and Sound Engineering',
      description:
        'musicology, harmony, acoustics, history of music, audio engineering, sound design...',
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
      title: 'Advanced Technician Certificate in Audiovisual Production',
      description: (
        <>
          majoring in Sound Engineering; audio recording, sound design, post-production (editing,
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
  work: {
    intent: 'primary', // blue
    labels: ['working on', 'worked on'],
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
  work: ['work', 'contribution', 'research-work', 'idea', 'hackathon'],
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
      <span className="text-muted-foreground">(soon?) Florence, Italy</span>
    </div>
  ),
  locationMin: 'Paris, France (UTC+1)',
  like: [
    { value: 'immersive experiences (esp. spatial audio)', intent: 'primary' },
    { value: 'anything open-source', intent: 'orange' },
    { value: 'truly accessible solutions', intent: 'orange' },
    { value: 'chaotic-good people', intent: 'success' },
    { value: 'trance (music)', intent: 'primary' },
    { value: 'planning stuff', intent: 'success' },
  ],
};

/**
 * Showcased versions of the website in descending order.
 */
export const WEBSITE_VERSIONS: { url: string; label: string; icon: LucideIcon }[] = [
  { url: '/', label: 'current', icon: SparkleIcon },
  { url: 'https://polarzero-v4.vercel.app', label: 'v-1', icon: TimerIcon },
  { url: 'https://polarzero-v3.vercel.app', label: 'v-2', icon: CastleIcon },
];
