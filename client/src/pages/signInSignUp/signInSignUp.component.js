import React from "react";
import SignIn from "../../components/signIn/signIn.component";
import SignUp from "../../components/signUp/signUp.component";
import { SignInAndSignUpContainer } from "./signInsignUp.styles";

// import './signInSignUp.style.scss';

const SignInSignUp = () => (
   <SignInAndSignUpContainer className='sign-in-sign-up'>
       <SignIn />
       <SignUp />
   </SignInAndSignUpContainer>
);

export default SignInSignUp;