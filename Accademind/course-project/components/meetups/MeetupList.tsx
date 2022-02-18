import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

export interface Meetup {
  id: string;
  image: string;
  title: string;
  address: string;
}

interface MeetupListProps {
  meetups: Meetup[];
}

function MeetupList({ meetups }: MeetupListProps) {
  return (
    <div className={classes.list}>
      {meetups.map(({ address, id, image, title }) => (
        <MeetupItem
          key={id}
          id={id}
          image={image}
          title={title}
          address={address}
        />
      ))}
    </div>
  );
}

export default MeetupList;
