import { BlogPostSection } from '@/lib/types/blog-post';

const sections: BlogPostSection[] = [
  {
    title: 'Introduction',
    slug: '',
    subsections: [],
  },
  {
    title: 'Origins and Web3',
    slug: 'origins-and-web3',
    subsections: [
      { title: 'Where does this term come from?', slug: 'where-does-this-term-come-from-' },
      {
        title: 'Oh yes, decentralization! Welcome Web3!',
        slug: 'oh-yes-decentralization-welcome-web3-',
      },
    ],
  },
  {
    title: 'Beyond virtual worlds',
    slug: 'beyond-virtual-worlds',
    subsections: [
      { title: 'So, what is a metaverse, then?', slug: 'so-what-is-a-metaverse-then-' },
      {
        title: "Don't they look more like video games?",
        slug: 'don-t-they-look-more-like-video-games-',
      },
    ],
  },
  {
    title: 'Impact on youth and society',
    slug: 'impact-on-youth-and-society',
    subsections: [
      {
        title:
          "But, given that link with video games, shouldn't this especially affect young people?",
        slug: 'but-given-that-link-with-video-games-shouldn-t-this-especially-affect-young-people-',
      },
      {
        title: 'I get it! The metaverse actually _already_ exists then.',
        slug: 'i-get-it-the-metaverse-actually-already-exists-then-',
      },
    ],
  },
  {
    title: 'Blurring lines with reality',
    slug: 'blurring-lines-with-reality',
    subsections: [
      {
        title:
          "So, the metaverse is not a video game, it doesn't exist yet either... What is it, then?",
        slug: 'so-the-metaverse-is-not-a-video-game-it-doesn-t-exist-yet-either-what-is-it-then-',
      },
      {
        title: 'Great! I hope I will be able to join the metaverse(s)!',
        slug: 'great-i-hope-i-will-be-able-to-join-the-metaverse-s-',
      },
    ],
  },
];

export default sections;
