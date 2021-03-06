import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Link from 'next/link';
import { Article } from '../..';
import Meta from '../../../components/Meta';
import { serverUrl } from '../../../config/env';

interface ArticleDetailsProps {
	article: Article;
}

export default function ArticleDetails({ article }: ArticleDetailsProps) {
	return (
		<>
			<Meta title={article.title} description={article.excerpt} />
			<h1>{article.title}</h1>
			<p>{article.body}</p>
			<br />
			<Link href="/">Go back</Link>
		</>
	);
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
	try {
		const res = await fetch(`${serverUrl}/api/articles`);
		const posts = (await res.json()) as Article[];

		const paths = posts.map(({ id }) => ({
			params: {
				id: id.toString(),
			},
		}));

		return {
			paths,
			fallback: false,
		};
	} catch (error) {
		console.error(error);
		return {
			paths: [],
			fallback: false,
		};
	}
}

export async function getStaticProps(
	context: GetStaticPropsContext
): Promise<GetStaticPropsResult<ArticleDetailsProps>> {
	try {
		const { params } = context;
		const res = await fetch(`${serverUrl}/api/articles/${params?.id}`);
		const article = (await res.json()) as Article;

		return {
			props: {
				article,
			},
		};
	} catch (error) {
		console.log(error);
		return {
			notFound: true,
		};
	}
}

// export async function getServerSideProps(context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<{}>> {
// 	try {
// 		const { params } = context;
// 		const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.id}`);
// 		const article = await res.json();

// 		return {
// 			props: {
// 				article,
// 			},
// 		};
// 	} catch (error) {
// 		console.log(error);
// 		return {
// 			notFound: true,
// 		};
// 	}
// }
