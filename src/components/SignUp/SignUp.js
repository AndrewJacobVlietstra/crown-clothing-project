import React from "react";
import "./SignUp.styles.scss";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { createUserProfileDocument, firebaseApp } from "../../firebase/firebase.utils";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { connect } from "react-redux";
import { setUserAction } from "../../redux/user/User.actions";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleErrorMessage = (message) => {
    const errorMessageContainer = document.querySelector('.error-message');
    errorMessageContainer.innerHTML = message;
      setTimeout(() => {
        errorMessageContainer.innerHTML = '';
      }, 4400);
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const {setUser} = this.props;
    const {displayName, email, password, confirmPassword} = this.state;
    

    if (displayName.length === 0) return this.handleErrorMessage('Please Enter a Display Name!');
    if (password !== confirmPassword) return this.handleErrorMessage('Passwords Do Not match!');
    if (!email.includes('@')) return this.handleErrorMessage('Email is missing \'@\' ');

    const auth = getAuth(firebaseApp);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setTimeout(() => {
          setUser({ uid: user.uid, displayName, email, createdAt: new Date()});
        }, 500);
        return createUserProfileDocument(user, { displayName });
      })
      .catch(err => console.log(err.code, err.message));


    return this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  };

  render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput type='text' name='displayName' value={displayName} onChange={this.handleInputChange} label='Display Name' />
          <FormInput type='email' name='email' value={email} onChange={this.handleInputChange} label='Email' required />
          <FormInput type='password' name='password' value={password} onChange={this.handleInputChange} label='Password' required />
          <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleInputChange} label='Confirm Password' required />

          <CustomButton type='submit' btnColor='black'>Sign up</CustomButton>
          <p className="error-message"></p>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUserAction(user)),
});

export default connect(null, mapDispatchToProps)(SignUp);
