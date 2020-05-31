import React from "react";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./signin-in-and-sign-out.styles.scss";

const SignInAndSignOutPage = () => (
  <div className="sign-in-and-sign-out-page">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignOutPage;
