import { useRef } from "react";
import Card from "../ui/Card";
import cx from "./NewMeetupForm.module.css";

export default function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();
  const addressInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
      address: enteredAddress,
    };

    props.onAddMeetup(meetupData);

    console.log(meetupData);
  }

  return (
    <Card>
      <form className={cx.form}>
        <div className={cx.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={cx.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={cx.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            required
            id="description"
            rows={5}
            ref={descriptionInputRef}
          />
        </div>
        <div className={cx.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={cx.actions}>
          <button type="submit" onClick={submitHandler}>
            Add Meetup
          </button>
        </div>
      </form>
    </Card>
  );
}
