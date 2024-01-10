import React from "react";
import style from "./ErrorComponent.module.css";
import error from "../../assets/images/pngwing.com.png";
const ErrorComponent = ({ text }) => {
  return (
    <>
      <div className={style.error_container}>
        <div>
          <img src={error} alt="error" />
        </div>
        <p>{text}</p>
      </div>
    </>
  );
};

export default ErrorComponent;
