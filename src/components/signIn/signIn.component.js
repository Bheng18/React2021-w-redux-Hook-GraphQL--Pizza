import React, { useState } from "react";
import { connect } from "react-redux";
// import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { emailSignInStart, googleSignInStart } from "../../redux/user/user.actions";
import CustomButton from "../customButton/customButton.component";
import FormInput from "../form-input/formInput.component";
import './signIn.style.scss';


  const SignIn = ({ emailSignInStart, googleSignInStart }) => {

     const [userCredentials, setUserCredentials] = useState({ 
        email: '', 
        password: '' 
      });

   const { email, password } = userCredentials;

   const handleSubmit = async event => {
      event.preventDefault();
  
     emailSignInStart(email, password);
  
    }
  
   const handleChange = event => {
      const { value, name } = event.target;
      setUserCredentials({...userCredentials, [name]: value });
    }

   return (

         <div className='sign-in'>
            <h1>I already have account</h1>
            <span>Sign in wih your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                   name='email' 
                   type='email' 
                   handleChange={handleChange}
                   value={email}
                   label='email' 
                   required 
                />

                <FormInput 
                   name='password' 
                   type='password' 
                   value={password}
                   handleChange={handleChange} 
                   label='password'
                   required 
                />
               <div className='buttons'>
                  <CustomButton type='submit'>Sign In</CustomButton>
                  <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</CustomButton>
               </div>
            </form>
         </div>
    
   )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
