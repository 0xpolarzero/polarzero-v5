import BLOCKCHAIN_BUT_FOR_REAL from './blockchain-but-for-real';
import BLOCKCHAIN_MAIS_POUR_DE_VRAI from './blockchain-mais-pour-de-vrai';

import { BlogPostSection } from '@/lib/types/writing';

export const SECTIONS: Record<string, BlogPostSection[]> = {
  'blockchain-but-for-real': BLOCKCHAIN_BUT_FOR_REAL,
  'blockchain-mais-pour-de-vrai': BLOCKCHAIN_MAIS_POUR_DE_VRAI,
};
