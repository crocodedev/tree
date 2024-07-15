import Container from "@/app/components/Container";
import SectionTitle from "@/app/components/SectionTitle";
import style from "./Demos.module.scss";
import DemoItem from "@/app/components/DemoItem";

const Demos = ({ demoInfo, title }) => {
  return (
    <section className={style["demos"]}>
      <Container>
        <div className={style["demos__wrapper"]}>
          <SectionTitle>{title}</SectionTitle>
          <div className={style["demos__items"]}>
            {demoInfo.map((i) => (
              <DemoItem name={i.name} image={i.image} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Demos;
