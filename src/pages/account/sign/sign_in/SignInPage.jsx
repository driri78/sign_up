import React, { Fragment } from "react";
import SignIn from "../../../../components/account/sign/sign_in/SignIn";
import Logo from "../../../../components/all/Logo";

function SignInPage(props) {
  return (
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
  );
}

export default SignInPage;
