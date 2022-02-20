import React, { Component } from "react";
import "./SignIn.styles.scss";
import FormInput from "../FormInput/FormInput";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleInputChange={this.handleInputChange}
            label='email'
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleInputChange={this.handleInputChange}
            label='password'
            required
          />

          <input type="submit" value="Submit Form"></input>
        </form>
      </div>
    );
  }
}

export default SignIn;
