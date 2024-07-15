import Link from "next/link";
import style from "./HeaderNav.module.scss";

const HeaderNav = () => {
  return (
    <nav className={style["header-nav"]}>
      <Link href="#">Demos</Link>
      <Link href="#">Catalog Pages</Link>
      <Link href="#">Product Pages</Link>
      <Link href="#">Other Pages</Link>
      <Link href="#">Get Support</Link>
      <Link href="#">Online Documentation</Link>
    </nav>
  );
};

export default HeaderNav;
