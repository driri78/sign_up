import React, { Fragment } from "react";

function Label({ tag_id, children }) {
  return (
    <Fragment>
      <label htmlFor={tag_id} className="input_label">
        {children}
      </label>
    </Fragment>
  );
}

export default Label;
