import { GetServerSidePropsContext, GetServerSidePropsResult, GetStaticPropsResult } from "next";
import { MongoClient } from "mongodb";

import Head from "next/head";
import MeetupList, { Meetup } from "../components/meetups/MeetupList";
import mongoConnect, { MeetupDocumentRes } from "../utils/mongoConnect";

interface HomePageProps {
  meetups: Meetup[];
}

export default function HomePage({ meetups }: HomePageProps) {
  return (
    <>
      <Head>
        <title>Next.js Meetups</title>
        <meta name="description" content="This is a small Next.js app to learn Next.js concepts" />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
}

// this function runs for each incoming request
// export function getServerSideProps(context: GetServerSidePropsContext): GetServerSidePropsResult<HomePageProps> {
//   // can access the req and res objects for incoming requests, like in node.js and express
//   const request = context.req;
//  const response = context.res;

//   // fetch data from an API or run server-side logic here

//   return {
//     props: {
//       meetups: MOCK_MEETUPS,
//     },
//   };
// }

// this function runs by Next at build time or after a timeout when configuring a revalidate (when there are incoming requests)
export async function getStaticProps(): Promise<GetStaticPropsResult<HomePageProps>> {
  // fetch data from an API or run server-side logic here
  // get the relevant collection and mongodb client
  const { collection: meetupsCollection, client } = await mongoConnect();

  // get the entire meetups collection list from the db
  const meetups = (await meetupsCollection.find().toArray()) as unknown as MeetupDocumentRes[];

  // close db connection after ending the operation
  client.close();

  return {
    props: {
      // the collection returns an _id property which is a special mongodb object, it needs to be converted to string and assigned to id property first
      meetups: meetups.map(({ _id, address, image, title }) => ({ address, image, title, id: _id.toString() })),
    },
    revalidate: 10, // incremental static regeneration (in seconds)
  };
}
