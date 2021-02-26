import React, { useState } from "react";
import FormInput from '../form-input/formInput.component';
import CustomButton from '../customButton/customButton.component';


import './signUp.style.scss';
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({ signUpStart }) => {

  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const  handleSubmit = (event) => {
      event.preventDefault();

      if(password !== confirmPassword){
          alert("passwords don't match");
          return;
      }
      signUpStart({ displayName, email, password });

    }

  const  handleChange = event => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }


        return(
          <div className='sign-up'>
             <h2 className='title'>I do not have an account</h2>
             <span>Sign up with your email and password</span>
             <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                  type='text'
                  name='displayName'
                  value={displayName}
                  onChange={handleChange}
                  label='Name'
                  required
                />
                <FormInput
                  type='email'
                  name='email'
                  value={email}
                  onChange={handleChange}
                  label='Email'
                  required
                />
                <FormInput
                  type='password'
                  name='password'
                  value={password}
                  onChange={handleChange}
                  label='Pasword'
                  required
                />
                <FormInput
                  type='password'
                  name='confirmPassword'
                  value={confirmPassword}
                  onChange={handleChange}
                  label='Confirm Paaword'
                  required
                />
                <CustomButton type='submit'>Sign Up</CustomButton>
             </form>
          </div>
        );

}

const mapDispatchToProps = dispatch => ({
 signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);