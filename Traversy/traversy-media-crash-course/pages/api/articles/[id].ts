import { NextApiRequest, NextApiResponse } from 'next';
import { Article } from '../..';
import { articles } from '../../../data';

export default function getArticlesHandler(req: NextApiRequest, res: NextApiResponse<Article | { message: string }>) {
	const { id: requestedId } = req.query;
	const selectedArticle = articles.find((article) => article.id.toString() === requestedId);

	if (selectedArticle) {
		res.status(200).json(selectedArticle);
	} else {
		res.status(404).json({ message: `Article with the ID of ${requestedId} was not found!` });
	}
}
