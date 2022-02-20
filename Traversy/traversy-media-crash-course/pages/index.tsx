import type { GetStaticPropsResult } from 'next';
import Head from 'next/head';
import ArticleList from '../components/ArticleList';

export interface Article {
	id: number | string;
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
			<Head>
				<title>WebDev News</title>
				<meta name="keywords" content="web development, programming" />
			</Head>
			<ArticleList articles={articles} />
		</div>
	);
}

export async function getStaticProps(): Promise<GetStaticPropsResult<HomeProps>> {
	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
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
