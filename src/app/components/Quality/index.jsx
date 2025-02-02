import style from "./Quality.module.scss";

const Quality = ({ text, color }) => {
  return (
    <div className={style["quality__item"]}>
      <div className={style["quality__icon"]}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 52 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.1199 49.5C60.3199 48.3 48.153 19.3333 37.4863 4C16.653 10 -14.3803 26.5 15.1198 45.5M15.1198 45.5C18.7865 41.8333 27.2864 33.5 30.4864 23.5M15.1198 45.5C12.6198 47.5 7.5864 53.2 5.9864 54"
            stroke={color === "white" ? "#FFFFFF" : "#B2E025"}
            stroke-width="6"
          />
        </svg>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Quality;
