import SectionTitle from "@/app/components/SectionTitle";
import style from "./Experience.module.scss";
import Container from "@/app/components/Container";

const Experience = ({ title, variation = "v1" }) => {
  if (variation === "v1") {
    return (
      <section className={style["experience"]}>
        <Container>
          <div className={style["experience__wrapper"]}>
            <SectionTitle>{title}</SectionTitle>
            <div className={style["experience__image"]}>
              <img src="/images/experience.png" alt="" />
            </div>
          </div>
        </Container>
      </section>
    );
  }

  if (variation === "v2") {
    return (
      <section className={style["experience"]}>
        <Container>
          <div className={style["experience__wrapper"]}>
            <SectionTitle>{title}</SectionTitle>
            <div className={style["experience__image-wrapper"]}>
              <div className={style["experience__image-left"]}>
                <div className={style["experience__image-first"]}>
                  <img src="/images/flexibility/left-first.png" alt="" />
                </div>
                <div className={style["experience__image-second"]}>
                  <img src="/images/flexibility/left-second.png" alt="" />
                </div>
              </div>
              <div
                className={`${style["experience__image"]} ${style["experience__image--v2"]}`}
              >
                <img src="/images/experience2.png" alt="" />
              </div>
              <div className={style["experience__image-right"]}>
                <div className={style["experience__image-first"]}>
                  <img src="/images/flexibility/right-first.png" alt="" />
                </div>
                <div className={style["experience__image-second"]}>
                  <img src="/images/flexibility/right-second.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  if (variation === "v3") {
    return (
      <section className={`${style["experience"]} ${style["experience--v3"]}`}>
        <Container>
          <div className={style["experience__wrapper"]}>
            <SectionTitle>{title}</SectionTitle>
            <div className={style["experience__image"]}>
              <img src="/images/experience3.png" alt="" />
            </div>
          </div>
        </Container>
      </section>
    );
  }
};

export default Experience;
