"use client";

import style from "./Header.module.scss";
import Button from "@/app/components/Button";
import HeaderNav from "./HeaderNav";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  const body = document.querySelector("body");

  const toggleMenu = () => {
    setActive((prev) => !prev);
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (active) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    }
  }, [active]);

  return (
    <motion.header
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: ["-100%", "5%", "0%"] }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={style["header"]}
    >
      <div className={style["header__wrapper"]}>
        <a
          href="#"
          className={style["header__logo"]}
          style={{ color: "black" }}
        >
          <div className={style["header__logo-icon"]}>
            <img src="/icons/logo.svg" alt="logo" />
          </div>
        </a>
        <div
          className={
            active
              ? `${style["header__menu-btn"]} ${style["header__menu-btn--active"]}`
              : `${style["header__menu-btn"]}`
          }
          onClick={toggleMenu}
        ></div>
        <HeaderNav active={active} />

        <div className={style["header__buy"]}>
          <Button text={"BUY THEME"} color={"white"} />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
