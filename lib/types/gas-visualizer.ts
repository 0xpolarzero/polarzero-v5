import { type Chain as ViemChain } from 'viem/chains';

export type DOMUpdateType = 'update' | 'restore' | 'loading';

export type Cell = {
  marked: boolean;
  original: Element;
  transformed: Element;
  loading: Element;
};

export type Layer = 'L1' | 'L2';

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
  layer: Layer;
  baseRpc: string;
};
