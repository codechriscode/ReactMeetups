import Card from "../ui/Card";
import cx from "./MeetupItem.module.css";

export default function MeetupItem(props) {
  const { image, title, address, description } = props;
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
          <button>Favorite</button>
        </div>
      </Card>
    </li>
  );
}
