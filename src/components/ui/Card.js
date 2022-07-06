import cx from "./Card.module.css";

export default function Card(props) {
  return <div className={cx.card}>{props.children}</div>;
}
