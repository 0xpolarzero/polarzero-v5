import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiKey = process.env.COINMARKETCAP_API_KEY || '';
  const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ message: 'Failed to fetch fiat data' });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: 'Error fetching fiat data', error: err });
  }
}
