import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../custom-button/custom-buttom-component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./signin.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span className="sub-title">Sign in with your email and password</span>
        <form onSubmit={this.onSubmit}>
          <FormInput
            type="email"
            handleChange={this.handleChange}
            value={email}
            name="email"
            label="Email"
            required
          />
          <FormInput
            type="password"
            handleChange={this.handleChange}
            value={password}
            name="password"
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <p className="or-text">or</p>
            <CustomButton onClick={signInWithGoogle} isGoogleSignin>
              <FontAwesomeIcon
                icon={["fab", "google"]}
                className="icon-google"
                size="lg"
                color="#fff"
              />
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
