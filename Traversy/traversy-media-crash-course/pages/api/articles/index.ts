import { NextApiRequest, NextApiResponse } from 'next';
import { Article } from '../..';
import { articles } from '../../../data';

export default function getArticlesHandler(req: NextApiRequest, res: NextApiResponse<Article[]>) {
	res.status(200).json(articles);
}
