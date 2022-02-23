import React, { Component } from "react";
import "./SignIn.styles.scss";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { signInWithGoogle, firebaseApp } from '../../firebase/firebase.utils';
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    const auth = getAuth(firebaseApp);
    await signInWithEmailAndPassword(auth, email, password);

    return this.setState({ email: "", password: "" });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleInputChange={this.handleInputChange}
            label='Email'
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleInputChange={this.handleInputChange}
            label='Password'
            required
          />

          <div className="buttons-container">
            <CustomButton type="submit" btnColor='black'>Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} btnColor='#0990DF' type='button'>Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
