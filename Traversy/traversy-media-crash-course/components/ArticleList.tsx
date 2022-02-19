import { Article } from '../pages';
import articleListStyles from '../styles/Article.module.css';

interface ArticleListProps {
	articles: Article[];
}

export default function ArticleList({ articles }: ArticleListProps) {
	return (
		<div className={articleListStyles.grid}>
			{articles.map((article) => (
				<h3>{article.title}</h3>
			))}
		</div>
	);
}
