import { MongoClient, ObjectId } from "mongodb";

export interface MeetupDocumentRes {
  _id: ObjectId;
  title: string;
  image: string;
  address: string;
}

export default async function mongoConnect() {
  // run the mongodb client
  const client = await MongoClient.connect(
    "mongodb+srv://eliad91:nJsROxMSHPes0aEE@cluster1.p2aa1.mongodb.net/next-js-meetups?retryWrites=true&w=majority"
  );

  // connect to the db
  const db = client.db();

  // get and return the relevant collection
  return {
    collection: db.collection("meetups"),
    client,
  };
}
