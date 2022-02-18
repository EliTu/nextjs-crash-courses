import type { NextPage } from "next";
import Head from "next/head";

export default function Home({}: NextPage) {
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <h1>Welcome!</h1>
    </div>
  );
}
