import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Maresias_-_bresil.JPG/800px-Maresias_-_bresil.JPG",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/17/27/e7/7c/smoke-waterfall.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

export default function AllMeetups() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList list={DUMMY_DATA} />
    </section>
  );
}
