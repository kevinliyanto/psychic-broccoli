import { summon } from '@/library/example';
import { NextApiRequest, NextApiResponse } from 'next';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (_req: NextApiRequest, res: NextApiResponse) => {
  const result = summon();

  res.statusCode = 200;
  res.json({ name: `John Doe`, result });
};
