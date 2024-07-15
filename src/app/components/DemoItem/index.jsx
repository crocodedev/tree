import style from "./DemoItem.module.scss";

const DemoItem = ({ name, image }) => {
  return (
    <div className={style["demo-item"]}>
      <div className={style["demo-item__image"]}>
        <img src={image} alt={name} />
      </div>
      <p className={style["demo-item__name"]}>{name}</p>
    </div>
  );
};

export default DemoItem;
