import classes from "./MeetupDetail.module.css";

interface MeetupDetailsProps {
  address: string;
  image: string;
  title: string;
  description?: string;
}

function MeetupDetail({
  address,
  description,
  image,
  title,
}: MeetupDetailsProps) {
  return (
    <section className={classes.detail}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}

export default MeetupDetail;
