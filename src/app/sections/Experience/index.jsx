import SectionTitle from "@/app/components/SectionTitle";
import style from "./Experience.module.scss";
import Container from "@/app/components/Container";

const Experience = () => {
  return (
    <section className={style["experience"]}>
      <Container>
        <div className={style["experience__wrapper"]}>
          <SectionTitle>best user experience on all devices</SectionTitle>
          <div className={style["experience__image"]}>
            <img src="/images/experience.png" alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
