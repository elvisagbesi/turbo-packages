import { NextApiRequest, NextApiResponse } from 'next';

import contentfulClient from '../../lib/content/client';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'dealerStoreLocation',
    });
    res.status(200).json(response.items?.map(item => ({ ...item.fields })));
  } catch (error) {
    res.status(400).json(error);
  }
};

export default handler;
