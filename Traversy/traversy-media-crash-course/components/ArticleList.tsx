import { Article } from '../pages';
import articleListStyles from '../styles/Article.module.css';
import ArticleItem from './ArticleItem';

interface ArticleListProps {
	articles: Article[];
}

export default function ArticleList({ articles }: ArticleListProps) {
	return (
		<div className={articleListStyles.grid}>
			{articles.map((article) => (
				<ArticleItem article={article} />
			))}
		</div>
	);
}
