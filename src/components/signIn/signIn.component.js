import React from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../customButton/customButton.component";
import FormInput from "../form-input/formInput.component";
import './signIn.style.scss';

class SignIn extends React.Component {
    constructor(props){
    super(props);

    this.state = {
        email: '',
        password: ''
    }

  }

  handleSubmit = async event => {
    event.preventDefault();

   const { email, password } = this.state;

   try{
     await auth.signInWithEmailAndPassword(email, password);
     this.setState({ email: '', password: '' });

   }catch(error){
     console.log('error bay', error);
   }
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
      return(
         <div className='sign-in'>
            <h1>I already have account</h1>
            <span>Sign in wih your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                   name='email' 
                   type='email' 
                   handleChange={this.handleChange}
                   value={this.state.email}
                   label='email' 
                   required 
                />

                <FormInput 
                   name='password' 
                   type='password' 
                   value={this.state.password}
                   handleChange={this.handleChange} 
                   label='password'
                   required 
                />
               <div className='buttons'>
                  <CustomButton type='submit'>Sign In</CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
               </div>
            </form>
         </div>
      );
  }
}

export default SignIn;
