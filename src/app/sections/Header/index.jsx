"use client";

import Container from "@/app/components/Container";
import style from "./Header.module.scss";
import HeaderNav from "../HeaderNav";
import Button from "@/app/components/Button";

const Header = () => {
  const testFc = () => {
    alert("ХУЙ");
  };
  return (
    <header className={style["header"]}>
      <Container>
        <div className={style["header__wrapper"]}>
          <h1>TEST</h1>
          <HeaderNav />
          <div className={style["header__test"]}></div>
          <Button handleClick={testFc} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
