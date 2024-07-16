import Container from "@/app/components/Container";
import style from "./Benefits.module.scss";

const Benefits = () => {
  return (
    <section className={style["benefits"]}>
      <Container>
        <div className={style["benefits__wrapper"]}></div>
      </Container>
    </section>
  );
};

export default Benefits;
