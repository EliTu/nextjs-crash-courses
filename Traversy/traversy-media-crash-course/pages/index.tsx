import type { GetStaticPropsResult } from 'next';
import ArticleList from '../components/ArticleList';
import Meta from '../components/Meta';
import { serverUrl } from '../config/env';

export interface Article {
	id: number;
	title: string;
	body: string;
	excerpt?: string;
	userId?: number;
}

interface HomeProps {
	articles: Article[];
}

export default function Home({ articles }: HomeProps) {
	return (
		<div>
			<Meta />
			<ArticleList articles={articles} />
		</div>
	);
}

export async function getStaticProps(): Promise<GetStaticPropsResult<HomeProps>> {
	try {
		const res = await fetch(`${serverUrl}/api/articles`);
		const articles = await res.json();

		return {
			props: {
				articles,
			},
		};
	} catch (error) {
		console.error(error);
		// in case of error, retuning an object with the notFound property will result in redirection to the 404 page
		return {
			notFound: true,
		};
	}
}
