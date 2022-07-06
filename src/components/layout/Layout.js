import MainNav from "./MainNav";
import cx from "./Layout.module.css";

export function Layout(props) {
  return (
    <div>
      <MainNav />
      <main className={cx.main}>{props.children}</main>
    </div>
  );
}
