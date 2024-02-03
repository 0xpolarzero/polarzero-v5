import { type Chain as ViemChain } from 'viem/chains';

export type Cell = {
  marked: boolean;
  original: Element;
  transformed: Element;
  loading: Element;
};

export type DOMUpdateType = 'update' | 'restore' | 'loading';

export type Currency = {
  name: string;
  symbol: string;
  cmcSlug: string;
  decimals: number;
};

export type Chain = {
  name: string;
  nativeToken: Currency;
  info: ViemChain;
  baseRpc: string;
};
