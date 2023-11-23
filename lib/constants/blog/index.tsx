import BLOCKCHAIN_BUT_FOR_REAL from './blockchain-but-for-real';
import BLOCKCHAIN_MAIS_POUR_DE_VRAI from './blockchain-mais-pour-de-vrai';
import CHAINLINK_NEW_DAWN from './chainlink-new-dawn';
import DECENTRALIZED_SYSTEMS_END_THE_CYCLE_OF_INDIFFERENCE from './decentralized-systems-end-the-cycle-of-indifference';
import SMART_CONTRACT_SECURITY_TERMINOLOGY_OF_A_REVIEW from './smart-contract-security-terminology-of-a-review';

import { BlogPostSection } from '@/lib/types/writing';

export const SECTIONS: Record<string, BlogPostSection[]> = {
  'smart-contract-security-terminology-of-a-review':
    SMART_CONTRACT_SECURITY_TERMINOLOGY_OF_A_REVIEW,
  'chainlink-new-dawn': CHAINLINK_NEW_DAWN,
  'blockchain-but-for-real': BLOCKCHAIN_BUT_FOR_REAL,
  'blockchain-mais-pour-de-vrai': BLOCKCHAIN_MAIS_POUR_DE_VRAI,
  'decentralized-systems-end-the-cycle-of-indifference':
    DECENTRALIZED_SYSTEMS_END_THE_CYCLE_OF_INDIFFERENCE,
};
