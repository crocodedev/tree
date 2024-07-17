import Container from "@/app/components/Container";
import style from "./Benefits.module.scss";
import SectionTitle from "@/app/components/SectionTitle";

const Benefits = () => {
  return (
    <section className={style["benefits"]}>
      <Container>
        <div className={style["benefits__wrapper"]}>
          <div className={style["benefits__top"]}>
            <div className={style["benefits__item"]}>
              <div className={style["benefits__item-icon"]}>
                <img src="/icons/benefits/seo.svg" alt="" />
              </div>
              <div className={style["benefits__item-text-wrapper"]}>
                <p className={style["benefits__item-name"]}>SEO Optimized</p>
                <p className={style["benefits__item-text"]}>
                  Unlock unparalleled speed with our SEO-optimized theme design.
                </p>
              </div>
            </div>
            <div className={style["benefits__item"]}>
              <div className={style["benefits__item-icon"]}>
                <img src="/icons/benefits/mobile.svg" alt="" />
              </div>
              <div className={style["benefits__item-text-wrapper"]}>
                <p className={style["benefits__item-name"]}>Mobile Friendly</p>
                <p className={style["benefits__item-text"]}>
                  Optimized design ensures performance, surpassing other themes
                  in speed.
                </p>
              </div>
            </div>
          </div>
          <div className={style["benefits__center"]}>
            <div className={style["benefits__item"]}>
              <div className={style["benefits__item-icon"]}>
                <img src="/icons/benefits/product.svg" alt="" />
              </div>
              <div className={style["benefits__item-text-wrapper"]}>
                <p className={style["benefits__item-name"]}>Top Speed</p>
                <p className={style["benefits__item-text"]}>
                  Experience unmatched speed with our optimized theme
                  performance design.
                </p>
              </div>
            </div>
            <SectionTitle>Benefits</SectionTitle>
            <div className={style["benefits__item"]}>
              <div className={style["benefits__item-icon"]}>
                <img src="/icons/benefits/diamond.svg" alt="" />
              </div>
              <div className={style["benefits__item-text-wrapper"]}>
                <p className={style["benefits__item-name"]}>Premium Features</p>
                <p className={style["benefits__item-text"]}>
                  Unlock premium functionality alongside lightning-fast speed
                  with design.
                </p>
              </div>
            </div>
          </div>
          <div className={style["benefits__bottom"]}>
            <div className={style["benefits__item"]}>
              <div className={style["benefits__item-icon"]}>
                <img src="/icons/benefits/settings.svg" alt="" />
              </div>
              <div className={style["benefits__item-text-wrapper"]}>
                <p className={style["benefits__item-name"]}>Easy To Use</p>
                <p className={style["benefits__item-text"]}>
                  Effortlessly personalize with our high-performance, theme
                  navigation.
                </p>
              </div>
            </div>
            <div className={style["benefits__item"]}>
              <div className={style["benefits__item-icon"]}>
                <img src="/icons/benefits/code.svg" alt="" />
              </div>
              <div className={style["benefits__item-text-wrapper"]}>
                <p className={style["benefits__item-name"]}>Optimized Code</p>
                <p className={style["benefits__item-text"]}>
                  Navigate effortlessly with high-performance, speed-optimized
                  theme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
