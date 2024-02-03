import { arbitrum, base, mainnet, optimism, polygon } from 'viem/chains';

import { Chain, Currency } from '@/lib/types/gas-visualizer';

export const CURRENCIES: Record<string, Currency> = {
  ETH: {
    name: 'Ethereum',
    symbol: 'ETH',
    cmcSlug: 'ethereum',
    decimals: 18,
  },
  MATIC: {
    name: 'Polygon',
    symbol: 'MATIC',
    cmcSlug: 'polygon',
    decimals: 18,
  },
};

export const CHAINS: Chain[] = [
  {
    name: 'Ethereum',
    nativeToken: CURRENCIES.ETH,
    info: mainnet,
    baseRpc: 'https://eth-mainnet.g.alchemy.com/v2/',
  },
  {
    name: 'Arbitrum One',
    nativeToken: CURRENCIES.ETH,
    info: arbitrum,
    baseRpc: 'https://arb-mainnet.g.alchemy.com/v2/',
  },
  {
    name: 'Optimism',
    nativeToken: CURRENCIES.ETH,
    info: optimism,
    baseRpc: 'https://opt-mainnet.g.alchemy.com/v2/',
  },
  {
    name: 'Base',
    nativeToken: CURRENCIES.ETH,
    info: base,
    baseRpc: 'https://base-mainnet.g.alchemy.com/v2/',
  },
  {
    name: 'Polygon',
    nativeToken: CURRENCIES.MATIC,
    info: polygon,
    baseRpc: 'https://polygon-mainnet.g.alchemy.com/v2/',
  },
];
