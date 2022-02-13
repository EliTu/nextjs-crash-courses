import { useRouter } from "next/router";

export default function NewsItem() {
  const { query } = useRouter();

  return (
    <>
      <h1>News Item nested route</h1>
      <div>id: {query.newsId}</div>
    </>
  );
}
