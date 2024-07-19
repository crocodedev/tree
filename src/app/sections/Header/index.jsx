"use client";

import style from "./Header.module.scss";
import Button from "@/app/components/Button";
import HeaderNav from "./HeaderNav";
import { motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);
  const toggleMenu = () => {
    setActive((prev) => !prev);
  };

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
        <div className={style["header__menu-btn"]} onClick={toggleMenu}></div>
        <HeaderNav active={active} />

        <div className={style["header__buy"]}>
          <Button text={"BUY THEME"} color={"white"} />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
