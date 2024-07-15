import style from "./Button.module.scss";

const Button = ({ handleClick, text, color }) => {
  return (
    <button
      className={
        color == "green"
          ? `${style["button"]}`
          : `${style["button"]} ${style["button--white"]}`
      }
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
