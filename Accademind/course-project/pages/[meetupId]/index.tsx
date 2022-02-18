import { ObjectId } from "mongodb";
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from "next";
import Head from "next/head";

import MeetupDetail from "../../components/meetups/MeetupDetail";
import { Meetup } from "../../components/meetups/MeetupList";
import mongoConnect, { MeetupDocumentRes } from "../../utils/mongoConnect";

interface MeetupDetailsProps {
  meetupData: Meetup | undefined;
}

export default function MeetupDetails({ meetupData }: MeetupDetailsProps) {
  return meetupData ? (
    <>
      <Head>
        <title>{meetupData.title}</title>
        <meta name="description" content={`Details for the ${meetupData.title} meetup`} />
      </Head>
      <MeetupDetail {...meetupData} />
    </>
  ) : null;
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<MeetupDetailsProps>> {
  const { params } = context;
  const meetupId = params?.meetupId;

  // get the relevant collection and mongodb client
  const { collection: meetupsCollection, client } = await mongoConnect();

  // query the relevant meetup directly from the db collection using findOne and passing the meetup id
  const { address, image, title, _id } = (await meetupsCollection.findOne({
    _id: new ObjectId(meetupId as string),
  })) as MeetupDocumentRes;

  client.close();

  return {
    props: {
      meetupData: {
        id: _id.toString(),
        address,
        image,
        title,
      },
    },
  };
}

// this function is used with conjunction to getStaticProps when utilized in a dynamic page, to get all the possible dynamic paths for the generation process by Next.js (otherwise, getStaticProps will not work)
// getStaticPaths will return an object that contains a property of 'path', which is an array of objects, each holding a params property, which will include a key as the dynamic identifier name and a its value
export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  // get the relevant collection and mongodb client
  const { collection: meetupsCollection, client } = await mongoConnect();

  const meetupIds = (await meetupsCollection.find().toArray()) as MeetupDocumentRes[];

  client.close();

  return {
    paths: meetupIds.map(({ _id }) => ({
      params: {
        meetupId: _id.toString(),
      },
    })),
    // tells next.js if our paths array contains all of the possible dynamic path options or just some of them. 'false' means that it contains ALL of the supported paths, and if the user enters any path value that is not present in the paths array, the user will get the 404 page. If 'true', next.js will try to generate the page for the dynamic id on the server for the dynamic request. We set the value to 'false' when we can and should have all the possible paths available, and 'true' when we don't want to generate all of the possible paths and just maybe have a partial array with the main pages (e.g. the most visited pages), and leave the rest to be dynamically handled by next.js.
    fallback: false,
  };
}
