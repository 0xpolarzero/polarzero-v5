import BLOCKCHAIN_BUT_FOR_REAL from './blockchain-but-for-real';
import BLOCKCHAIN_MAIS_POUR_DE_VRAI from './blockchain-mais-pour-de-vrai';
import DECENTRALIZED_SYSTEMS_END_THE_CYCLE_OF_INDIFFERENCE from './decentralized-systems-end-the-cycle-of-indifference';

import { BlogPostSection } from '@/lib/types/writing';

export const SECTIONS: Record<string, BlogPostSection[]> = {
  'blockchain-but-for-real': BLOCKCHAIN_BUT_FOR_REAL,
  'blockchain-mais-pour-de-vrai': BLOCKCHAIN_MAIS_POUR_DE_VRAI,
  'decentralized-systems-end-the-cycle-of-indifference':
    DECENTRALIZED_SYSTEMS_END_THE_CYCLE_OF_INDIFFERENCE,
};
