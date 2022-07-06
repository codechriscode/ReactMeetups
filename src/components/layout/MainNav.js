import { Link } from "react-router-dom";
import cx from "./MainNav.module.css"

export default function MainNav() {
  return (
    <>
      <header className={cx.header}><div className={cx.logo}>React Meetups</div>
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
          </li>
        </ul>
      </nav>
      </header>
    </>
  );
}
