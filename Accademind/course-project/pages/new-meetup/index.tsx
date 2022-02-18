import Head from "next/head";
import { useRouter } from "next/router";

import { Meetup } from "../../components/meetups/MeetupList";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export type FormMeetupData = Omit<Meetup, "id">;

export default function NewMeetup() {
  const router = useRouter();
  const onAddMeetup = async (formMeetupData: FormMeetupData) => {
    try {
      // api destination is the same as the folder/file structure of the api in the pages folder
      await fetch("/api/new-meetup", {
        method: "POST",
        body: JSON.stringify(formMeetupData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Add a new meetup</title>
        <meta name="description" content="Add new exciting meetups to the meetup list" />
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetup} />;
    </>
  );
}
