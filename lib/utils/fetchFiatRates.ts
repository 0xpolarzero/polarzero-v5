import { CURRENCIES } from '@/lib/constants/gas-visualizer';

type CMCEntry = {
  id: string;
  name: string;
  symbol: string;
  slug: string;
  date_added: string;
  tags: string[];
  max_supply: number;
  circulating_supply: number;
  total_supply: number;
  platform: string;
  cmc_rank: number;
  last_updated: string;
  quote: {
    USD: {
      price: number;
      volume_24h: number;
      percent_change_1h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_60d: number;
      percent_change_90d: number;
      market_cap: number;
      last_updated: string;
    };
  };
};

type CMCData = {
  status: {
    timestamp: string;
    error_code: number;
    error_message: string;
    elapsed: number;
    credit_count: number;
    notice: string;
  };
  data: CMCEntry[];
};

const fetchFiatRates = async () => {
  // const ids = networks.map((network) => network.coinGeckoId).join(',');
  // const vsCurrencies = currencies.join(',');

  try {
    const response = await fetch('/api/coinmarketcap', {
      next: { revalidate: 100 },
    });

    if (!response.ok) {
      console.error('Error fetching fiat rates:', response.statusText);
      return null;
    }

    const data: CMCData = await response.json();
    const filtered = data.data
      .filter((entry) =>
        Object.values(CURRENCIES).some((currency) => currency.cmcSlug === entry.slug),
      )
      .map((entry) => ({
        name: entry.name,
        symbol: entry.symbol,
        price: entry.quote.USD.price,
      }));

    return filtered;
  } catch (error) {
    console.error('Error fetching fiat rates:', error);
    return null;
  }
};

export default fetchFiatRates;
