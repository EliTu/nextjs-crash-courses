import Link from 'next/link';
import { Article } from '../pages';
import articleStyles from '../styles/Article.module.css';

interface ArticleProps {
	article: Article;
}

export default function ArticleItem({ article }: ArticleProps) {
	return (
		<Link href={`/article/${article.id}`}>
			<a className={articleStyles.card}>
				<h3>{article.title} &rarr;</h3>
				<p>{article.excerpt}</p>
			</a>
		</Link>
	);
}
