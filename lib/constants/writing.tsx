import { BlogPost } from '../types/writing';

/**
 * Writing pages displayed on
 * [**polarzero.xyz/writing**](https://polarzero.xyz/writing)'s table.
 */
export const WRITING_BLOG_PAGES: BlogPost[] = [
  {
    title: 'Blockchain...',
    subtitle: '... but for Real',
    description:
      'Some explanations about blockchain: current perception, what is it actually, how it works, perspectives for the future, and what to do now.',
    slug: 'blockchain-but-for-real',
    date: new Date('2023-11-07'),
    platform: 'Medium',
    url: 'https://medium.com/@0xpolarzero/blockchain-but-for-real-e1d8c0e0ebfc',
    tags: ['education'],
  },
  {
    title: 'La blockchain... (FR)',
    subtitle: '... mais pour de vrai',
    description:
      "Quelques explications sur la blockchain : perceptions actuelles, ce que c'est réellement, fonctionnement, perspectives futures, ce qu'on peut faire maintenant...",
    slug: 'blockchain-mais-pour-de-vrai',
    date: new Date('2023-11-07'),
    platform: 'Medium',
    url: 'https://medium.com/@0xpolarzero/la-blockchain-mais-pour-de-vrai-0fed9b951af9',
    tags: ['education', 'fr'],
  },
  {
    title: 'Decentralized Systems',
    subtitle: 'End The Cycle of Indifference',
    description:
      'How traditional democracies tend to favor indifference, through delegation of knowledge and awareness, and how decentralized systems can help by incentivizing active participation in governance.',
    slug: 'decentralized-systems-end-the-cycle-of-indifference',
    date: new Date('2023-10-17'),
    platform: 'Medium',
    url: 'https://medium.com/@0xpolarzero/decentralized-systems-end-the-cycle-of-indifference-8c19d7167778',
    tags: ['education', 'governance'],
  },
  {
    title: "Chainlink's New Dawn",
    subtitle: 'Latest milestones',
    description:
      'A reflection on Chainlink’s latest milestones, and key aspects from a developer’s perspective.',
    slug: 'chainlink-new-dawn',
    date: new Date('2023-10-02'),
    platform: 'Medium',
    url: 'https://medium.com/@0xpolarzero/chainlinks-new-dawn-725d7a6881cb',
    tags: ['chainlink', 'infrastructure'],
  },
  {
    title: 'Smart Contract Security',
    subtitle: 'Terminology of a Review',
    description:
      'Navigating the rambling world of smart contract security can be a challenge, especially when you’re swarmed with a slew of technical jargon. As I’m relatively new to this landscape, I find myself…',
    slug: 'smart-contract-security-terminology-of-a-review',
    date: new Date('2023-09-18'),
    platform: 'Medium',
    url: 'https://medium.com/@0xpolarzero/smart-contract-security-terminology-of-a-review-99b9203c9824',
    tags: ['security research'],
  },
  {
    title: 'Lesson #0',
    subtitle: 'Fundamentals of Solidity Storage',
    description:
      'The storage layout in the EVM, how data is meticulously stored and managed with Solidity.',
    slug: 'fundamentals-of-solidity-storage',
    date: new Date('2023-06-29'),
    platform: 'Medium',
    url: 'https://medium.com/@0xpolarzero/fundamentals-of-solidity-storage-581ba0551b3',
    tags: ['education', 'solidity'],
  },
  {
    title: 'What is the metaverse anyway?',
    subtitle: 'Breaking through the common misconceptions',
    description:
      'The word "metaverse" comes with so many misconceptions, that we no longer know what it means. Major brands use it for marketing purposes, creators automatically associate a NFT collection to a potential future metaverse...',
    slug: 'what-is-the-metaverse-anyway',
    date: new Date('2022-05-14'),
    platform: 'Hashnode',
    url: 'https://blog.polarzero.xyz/what-is-the-metaverse-anyway',
    tags: ['education', 'immersive tech'],
  },
  {
    title: "L'audio immersif dans les mondes virtuels",
    subtitle: 'Mémoire de recherche (FR)',
    description:
      'Une place pour l’audio immersif dans le Web 3.0 : intégration dans le métavers. Adaptation à un nouveau modèle, immersion dans un espace en pleine expansion, expériences immersives accessibles et avancées...',
    slug: 'audio-immersif-dans-les-mondes-virtuels',
    date: new Date('2022-07-07'),
    platform: 'PDF',
    url: 'https://drive.google.com/file/d/1r0_ZjVGLb32tfxoBmrERJypyCV6No36u/view',
    tags: ['education', 'immersive tech', 'fr'],
  },
];
