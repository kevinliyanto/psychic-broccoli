import { NextApiRequest, NextApiResponse } from 'next';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const body = JSON.parse(req.body);
    const { password, ...rest } = body;
    res.json(rest);
  } else {
    res.statusCode = 400;
    res.json({ error: `Route only accepts POST request` });
  }
};
