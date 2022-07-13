import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

export default function Favorites() {
  const favsCtx = useContext(FavoritesContext);

  return (
    <section>
      <h1>Favorites</h1>
      {favsCtx.totalFavorites ? (
        <MeetupList list={favsCtx.favorites} />
      ) : (
        <h3>Add Favorites to see them here :D</h3>
      )}
    </section>
  );
}
