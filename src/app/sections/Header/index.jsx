"use client";

import Container from "@/app/components/Container";
import style from "./Header.module.scss";
import Button from "@/app/components/Button";
import HeaderNav from "./HeaderNav";

const Header = () => {
  const testFc = () => {
    alert("ХУЙ");
  };
  return (
    <header className={style["header"]}>
      <Container>
        <div className={style["header__wrapper"]}>
          <h1 style={{ color: "black" }}>TREE</h1>
          <HeaderNav />

          <div className={style["header__buy"]}>
            <Button handleClick={testFc} text={"BUY THEME"} color={"white"} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
