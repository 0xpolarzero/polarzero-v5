import { BlogPostSection } from '@/lib/types/writing';

const sections: BlogPostSection[] = [
  {
    title: 'Overview',
    slug: '',
    subsections: [],
  },
  {
    title: '1. The essence of decentralization',
    slug: '1-the-essence-of-decentralization',
    subsections: [],
  },
  {
    title: '2. The flaws of traditional governance',
    slug: '2-the-flaws-of-traditional-governance',
    subsections: [
      {
        title: 'Pitfalls of established hierarchies',
        slug: 'pitfalls-of-established-hierarchies',
      },
      {
        title: 'An illusion of rational compromise in democracy',
        slug: 'an-illusion-of-rational-compromise-in-democracy',
      },
      {
        title: 'Delegation’s drawbacks and power struggles',
        slug: 'delegation-s-drawbacks-and-power-struggles',
      },
    ],
  },
  {
    title: '3. Towards a decentralized governance model',
    slug: '3-towards-a-decentralized-governance-model',
    subsections: [
      {
        title: 'Reimagining decision-making in decentralized systems',
        slug: 'reimagining-decision-making-in-decentralized-systems',
      },
      {
        title: 'The mechanics of decision distribution in decentralized platforms',
        slug: 'the-mechanics-of-decision-distribution-in-decentralized-platforms',
      },
      {
        title: 'Power distribution: The nuances of scaling and incentivization',
        slug: 'power-distribution-the-nuances-of-scaling-and-incentivization',
      },
    ],
  },
  {
    title: '4. Trust in governance: A shift in paradigm',
    slug: '4-trust-in-governance-a-shift-in-paradigm',
    subsections: [
      {
        title: 'Trust in traditional voting mechanisms',
        slug: 'trust-in-traditional-voting-mechanisms',
      },
      {
        title: 'Enabling fair participation with decentralized systems',
        slug: 'enabling-fair-participation-with-decentralized-systems',
      },
      {
        title: 'Zero-knowledge proofs: Ensuring privacy and integrity',
        slug: 'zero-knowledge-proofs-ensuring-privacy-and-integrity',
      },
    ],
  },
  {
    title: '5. Real-world implementations',
    slug: '5-real-world-implementations',
    subsections: [
      {
        title: 'Polygon ID: Managing decentralized identities',
        slug: 'polygon-id-managing-decentralized-identities',
      },
      {
        title: 'Vocdoni: Pioneering anonymous digital voting',
        slug: 'vocdoni-pioneering-anonymous-digital-voting',
      },
    ],
  },
  {
    title: '6. Concluding thoughts: Our next steps',
    slug: '6-concluding-thoughts-our-next-steps',
    subsections: [],
  },
  {
    title: '7. References',
    slug: '7-references',
    subsections: [
      { title: 'Bibliography', slug: 'bibliography' },
      {
        title: 'Further reading (Educational content)',
        slug: 'further-reading-educational-content-',
      },
    ],
  },
];

export default sections;
