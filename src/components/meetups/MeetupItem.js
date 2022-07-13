import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import Card from "../ui/Card";
import cx from "./MeetupItem.module.css";

export default function MeetupItem(props) {
  const { image, title, address, description, id } = props;
  const favCtx = useContext(FavoritesContext);

  const itemIsFavorite = favCtx.itemIsFavorite(id);

  function toggleFavoriteStatusHandler(e) {
    if (itemIsFavorite) {
      favCtx.removeFavorite(id);
    } else {
      favCtx.addFavorite({
        id: id,
        image: image,
        title: title,
        address: address,
        description: description,
      });
    }
  }

  return (
    <li className={cx.item}>
      <Card>
        <div className={cx.image}>
          <img src={image} alt={title} />
        </div>
        <div className={cx.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={cx.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Unfavorite" : "Favorite"}
          </button>
        </div>
      </Card>
    </li>
  );
}
