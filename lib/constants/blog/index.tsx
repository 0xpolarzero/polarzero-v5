import BLOCKCHAIN_BUT_FOR_REAL from './blockchain-but-for-real';
import BLOCKCHAIN_MAIS_POUR_DE_VRAI from './blockchain-mais-pour-de-vrai';
import CHAINLINK_NEW_DAWN from './chainlink-new-dawn';
import DECENTRALIZED_SYSTEMS_END_THE_CYCLE_OF_INDIFFERENCE from './decentralized-systems-end-the-cycle-of-indifference';
import LESSON_0_FUNDAMENTALS_OF_SOLIDITY_STORAGE from './lesson-0-fundamentals-of-solidity-storage';
import SMART_CONTRACT_SECURITY_TERMINOLOGY_OF_A_REVIEW from './smart-contract-security-terminology-of-a-review';
import WHAT_IS_THE_METAVERSE_ANYWAY from './what-is-the-metaverse-anyway';

import { BlogPostSection } from '@/lib/types/blog-post';

export const SECTIONS: Record<string, BlogPostSection[]> = {
  'blockchain-but-for-real': BLOCKCHAIN_BUT_FOR_REAL,
  'blockchain-mais-pour-de-vrai': BLOCKCHAIN_MAIS_POUR_DE_VRAI,
  'chainlink-new-dawn': CHAINLINK_NEW_DAWN,
  'decentralized-systems-end-the-cycle-of-indifference':
    DECENTRALIZED_SYSTEMS_END_THE_CYCLE_OF_INDIFFERENCE,
  'lesson-0-fundamentals-of-solidity-storage': LESSON_0_FUNDAMENTALS_OF_SOLIDITY_STORAGE,
  'smart-contract-security-terminology-of-a-review':
    SMART_CONTRACT_SECURITY_TERMINOLOGY_OF_A_REVIEW,
  'what-is-the-metaverse-anyway': WHAT_IS_THE_METAVERSE_ANYWAY,
};
