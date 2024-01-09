import React from "react";
import style from "./Loader.module.css";
import { ClipLoader } from "react-spinners";
const Loader = ({ loading }) => {
  const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  return (
    <div className={style.loading_container}>
      <ClipLoader css={override} size={150} color={"#fff"} loading={loading} />
    </div>
  );
};

export default Loader;
