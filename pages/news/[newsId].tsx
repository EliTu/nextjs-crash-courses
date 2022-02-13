import { useRouter } from "next/router";
import Link from "next/link";

export default function NewsItem() {
  const { query } = useRouter();

  const pageTitle = query.newsId?.toString().toUpperCase();

  return (
    <>
      <h1>{pageTitle}</h1>
      <Link href="/news">Go back</Link>
    </>
  );
}
