import Link from "next/link";

export default function News() {
  return (
    <div>
      <h1>News page</h1>
      <ul>
        <li>
          <Link href="/news/article-1">Article #1</Link>
        </li>
        <li>
          <Link href="/news/article-2">Article #2</Link>
        </li>
      </ul>
    </div>
  );
}
