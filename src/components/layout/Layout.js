import MainNav from "./MainNav";
import cx from "./Layout.module.css";

export function Layout(props) {
  return (
    <div className={cx.main}>
      <MainNav />
      <main>{props.children}</main>
    </div>
  );
}
