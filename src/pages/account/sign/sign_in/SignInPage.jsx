import React, { Fragment } from "react";
import SignIn from "./SignIn";
import Logo from "../../../../components/all/Logo";

function SignInPage(props) {
  return (
    <Fragment>
      <div
        style={{
          position: "relative",
          top: "50%",
          transform: "translateY(-70%)",
        }}
      >
        <Logo />
        <SignIn />
      </div>
    </Fragment>
  );
}

export default SignInPage;
