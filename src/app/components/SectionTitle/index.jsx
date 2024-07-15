import style from "./SectionTitle.module.scss";

const SectionTitle = ({ children }) => {
  return <p className={style["title"]}>{children}</p>;
};

export default SectionTitle;
