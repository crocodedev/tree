import style from "./Button.module.scss";

const Button = ({ handleClick, text, color, size }) => {
  const buttonClass = `${style["button"]} ${
    color === "green" ? "" : style["button--white"]
  } ${size === "xl" ? style["button--xl"] : ""}`;

  return (
    <button className={buttonClass} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
