import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import Loading from "../components/ui/Loading";

export default function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://meet-up-react-course-default-rtdb.firebaseio.com/meetups.json`
    )
      .then((response) => response.json())
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          meetups.push({ id: key, ...data[key] });
        }
        setIsLoading(false);
        setMeetups(meetups);
      });
  }, []);

  return (
    <section>
      <h1>All Meetups</h1>
      {isLoading ? <Loading /> : <MeetupList list={meetups} />}
    </section>
  );
}
