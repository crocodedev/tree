import Quality from "@/app/components/Quality";
import style from "./Hero.module.scss";
import Container from "@/app/components/Container";
import Button from "@/app/components/Button";

const Hero = () => {
  return (
    <section className={style["hero"]}>
      <Container>
        <div className={style["hero__wrapper"]}>
          <div className={style["hero__text-wrapper"]}>
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
          </div>
          <div className={style["hero__image-wrapper"]}>
            <div className={style["hero__image"]}>
              <img src="/images/hero1.png" alt="" />
            </div>
            <div
              className={`${style["hero__image"]} ${style["hero__image--secondary"]}`}
            >
              <img src="/images/hero2.png" alt="" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
