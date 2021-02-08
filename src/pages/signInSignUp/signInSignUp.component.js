import React from "react";
import SignIn from "../../components/signIn/signIn.component";
import SignUp from "../../components/signUp/signUp.component";

import './signInSignUp.style.scss';

const SignInSignUp = () => (
   <div className='sign-in-sign-up'>
       <SignIn />
       <SignUp />
   </div>
);

export default SignInSignUp;