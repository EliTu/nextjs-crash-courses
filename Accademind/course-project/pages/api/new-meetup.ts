// api/new-meetup

import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

import mongoConnect from "../../utils/mongoConnect";

export default async function newMeetupApiHandler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  if (method === "POST") {
    try {
      // get the relevant collection and mongodb client
      const { collection: meetupsCollection, client } = await mongoConnect();

      // insert a bew entry to the collection based on the form data
      await meetupsCollection.insertOne(body);

      // on finish, close the client
      client.close();

      // send a response on success
      res.status(201).json({
        message: "Meetup created!",
      });
    } catch (error) {
      // handle any errors
      console.log(error);
      res.status(500).json({
        message: "Meetup creation failed!",
      });
    }
  }
}
