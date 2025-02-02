"use client";

import Quality from "@/app/components/Quality";
import style from "./Hero.module.scss";
import Container from "@/app/components/Container";
import Button from "@/app/components/Button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className={style["hero"]}>
      <Container>
        <div className={style["hero__wrapper"]}>
          <motion.div
            transition={{ x: { duration: 0.5, ease: "easeInOut" } }}
            className={style["hero__text-wrapper"]}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, x: ["-100%", "5%", "0%"] },
              hidden: { opacity: 0, x: "-100%" },
            }}
          >
            <div className={style["hero__text"]}>
              <p className={style["hero__text-green"]}>Ultimate</p>
              <p className={style["hero__text-black"]}>Shopify Theme</p>
            </div>
            <div className={style["hero__qualities"]}>
              <Quality text={"Fastest"} />
              <Quality text={"Mobile Friendly"} />
              <Quality text={"SEO Optimized"} />
              <Quality text={"Clean"} />
            </div>
            <div className={style["hero__btns"]}>
              <Button text={"explore tree"} color={"green"} />
              <Button text={"our portfolio"} color={"green"} />
            </div>
          </motion.div>
          <div className={style["hero__image-wrapper"]}>
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: ["100%", "-5%", "0%"] }}
              transition={{ y: { duration: 0.5, ease: "easeInOut" } }}
              className={style["hero__image"]}
            >
              <img src="/images/hero1.png" alt="" />
            </motion.div>
            <motion.div
              transition={{ duration: 0.4, ease: "easeInOut" }}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: ["100%", "-5%", "0%"] }}
              className={`${style["hero__image"]} ${style["hero__image--secondary"]}`}
            >
              <img src="/images/hero2.png" alt="" />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
