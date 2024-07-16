import Button from "@/app/components/Button";
import Container from "@/app/components/Container";
import Quality from "@/app/components/Quality";
import SectionTitle from "@/app/components/SectionTitle";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style["footer"]}>
      <Container>
        <div>
          <SectionTitle>What are you waiting for?</SectionTitle>
          <div className={style["footer__quality"]}>
            <Quality text={"Premium Support"} color={"white"} />
            <Quality text={"No Monthly Charge"} color={"white"} />
            <Quality text={"No coding knowledge required"} color={"white"} />
          </div>
          <div className={style["footer__btns"]}>
            <Button text={"BUY NOW"} size={"xl"} />
            <Button text={"OUR PORTFOLIO"} size={"xl"} />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
