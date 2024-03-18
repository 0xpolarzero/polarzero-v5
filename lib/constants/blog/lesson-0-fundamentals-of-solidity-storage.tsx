import { BlogPostSection } from '@/lib/types/blog-post';

const sections: BlogPostSection[] = [
  {
    title: 'Overview',
    slug: '',
    subsections: [],
  },
  {
    title: '1. A Quick Intro to the EVM’s Storage Structure',
    slug: '1-a-quick-intro-to-the-evm-s-storage-structure',
    subsections: [],
  },
  {
    title: '2. The Special Slots',
    slug: '2-the-special-slots',
    subsections: [
      {
        title: 'Slots 1–2: scratch space for hashing',
        slug: 'slots-1-2-0x00-0x3f-scratch-space-for-hashing',
      },
      {
        title: 'Slot 3: free memory pointer',
        slug: 'slot-3-0x40-0x5f-free-memory-pointer',
      },
      { title: 'Slot 4: zero slot', slug: 'slot-4-0x60-0x7f-zero-slot' },
    ],
  },
  {
    title: '3. Why Does This Matter?',
    slug: '3-why-does-this-matter',
    subsections: [
      {
        title: 'Efficient storage packing to minimize gas costs',
        slug: 'efficient-storage-packing-to-minimize-gas-costs',
      },
      {
        title: 'Preserving data integrity in upgradeable smart contracts',
        slug: 'preserving-data-integrity-in-upgradeable-smart-contracts',
      },
    ],
  },
];

export default sections;
