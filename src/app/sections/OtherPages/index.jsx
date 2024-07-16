import Container from "@/app/components/Container";
import style from "./OtherPages.module.scss";
import SectionTitle from "@/app/components/SectionTitle";

const OtherPages = () => {
  return (
    <section className={style["other-pages"]}>
      <Container>
        <div className={style["other-pages__wrapper"]}>
          <SectionTitle>Other Pages</SectionTitle>
          <div className={style["other-pages__items"]}>
            <div className={style["other-pages__left"]}>
              <div>
                <img src="/images/other/1.png" alt="" />
              </div>
              <div>
                <img src="/images/other/4.png" alt="" />
              </div>
            </div>
            <div className={style["other-pages__center"]}>
              <div>
                <img src="/images/other/2.png" alt="" />
              </div>
              <div>
                <img src="/images/other/5.png" alt="" />
              </div>
            </div>
            <div className={style["other-pages__right"]}>
              <div>
                <img src="/images/other/3.png" alt="" />
              </div>

              <div>
                <img src="/images/other/6.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OtherPages;
