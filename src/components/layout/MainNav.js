import { Link } from "react-router-dom";
import cx from "./MainNav.module.css";
import FavoritesContext from "../../store/favorites-context";
import { useContext } from "react";

export default function MainNav() {
  const favsCtx = useContext(FavoritesContext);

  return (
    <>
      <header className={cx.header}>
        <div className={cx.logo}>React Meetups</div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Meetups</Link>
            </li>
            <li>
              <Link to="/newMeetup">Add a Meetup</Link>
            </li>
            <li>
              <Link to="/favorites">My Favorites</Link>
              <span className={cx.badge}>{favsCtx.totalFavorites}</span>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
