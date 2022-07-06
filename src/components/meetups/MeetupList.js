import MeetupItem from "./MeetupItem";

import cx from "./MeetupList.module.css";

export default function MeetupList(props) {
  return (
    <ul className={cx.MeetupList}>
      {props.list.map((item) => (
        <MeetupItem
          title={item.title}
          description={item.description}
          image={item.image}
          address={item.address}
          key={item.id}
        />
      ))}
    </ul>
  );
}
