import { GetServerSidePropsContext, GetServerSidePropsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Link from 'next/link';
import { Article } from '../..';

interface ArticleDetailsProps {
	article: Article;
}

export default function ArticleDetails({ article }: ArticleDetailsProps) {
	return (
		<>
			<h1>{article.title}</h1>
			<p>{article.body}</p>
			<br />
			<Link href="/">Go back</Link>
		</>
	);
}

export async function getStaticProps(
	context: GetStaticPropsContext
): Promise<GetStaticPropsResult<ArticleDetailsProps>> {
	try {
		const { params } = context;
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.id}`);
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
