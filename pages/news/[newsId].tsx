import { useRouter } from "next/router";

export default function NewsItem() {
  const { query } = useRouter();

  const pageTitle = query.newsId?.toString().toUpperCase();

  return (
    <>
      <h1>{pageTitle}</h1>
      <a href="/news">Go back</a>
    </>
  );
}
