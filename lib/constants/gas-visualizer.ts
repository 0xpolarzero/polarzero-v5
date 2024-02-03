import { arbitrum, base, mainnet, optimism, polygon } from 'wagmi/chains';

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
    layer: 'L1',
    baseRpc: 'https://eth-mainnet.g.alchemy.com/v2/',
  },
  {
    name: 'Arbitrum One',
    nativeToken: CURRENCIES.ETH,
    info: arbitrum,
    layer: 'L2',
    baseRpc: 'https://arb-mainnet.g.alchemy.com/v2/',
  },
  {
    name: 'Optimism',
    nativeToken: CURRENCIES.ETH,
    info: optimism,
    layer: 'L2',
    baseRpc: 'https://opt-mainnet.g.alchemy.com/v2/',
  },
  {
    name: 'Base',
    nativeToken: CURRENCIES.ETH,
    info: base,
    layer: 'L2',
    baseRpc: 'https://base-mainnet.g.alchemy.com/v2/',
  },
  {
    name: 'Polygon',
    nativeToken: CURRENCIES.MATIC,
    info: polygon,
    layer: 'L1', // gas-calculation-wise it is a L1
    baseRpc: 'https://polygon-mainnet.g.alchemy.com/v2/',
  },
];
