import React, { Fragment } from "react";
import style from "../assets/styles/components/Label.module.css";

function Label({ tag_id, children }) {
  return (
    <Fragment>
      <label htmlFor={tag_id} className={style.input_label}>
        {children}
      </label>
    </Fragment>
  );
}

export default Label;
