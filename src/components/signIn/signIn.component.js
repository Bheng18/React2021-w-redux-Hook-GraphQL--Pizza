import React from "react";
import { connect } from "react-redux";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { emailSignInStart, googleSignInStart } from "../../redux/user/user.actions";
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
   const { emailSignInStart } = this.props;
   const { email, password } = this.state;

   emailSignInStart(email, password);

   // try{
   //   await auth.signInWithEmailAndPassword(email, password);
   //   this.setState({ email: '', password: '' });

   // }catch(error){
   //   console.log('error bay', error);
   // }
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
     const { googleSignInStart } = this.props;
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
                  <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</CustomButton>
               </div>
            </form>
         </div>
      );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
