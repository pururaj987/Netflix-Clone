import React, { useRef } from 'react'
import { auth } from '../../firebase';
import "./SignUpScreen.css";


function SignUpScreen() {
    
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value , 
            passwordRef.current.value
        ).then((auth) => console.log(auth))
        .catch(error => console.error(error));
    }

    const signIn = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(auth => console.log(auth))
        .catch(error => alert(error.message));
    }

    return (
        <div className = "sign-up">
            <form>
                <h1>Sign In</h1>
                <input ref = {emailRef} type = "email" placeholder = "Email" />
                <input ref = {passwordRef} placeholder = "Password" type = "password" />
                <button type = "submit" onClick = {signIn} >Sign In</button>
                <h4>
                    <span className = "sign-up-grey">New To Netflix?</span> 
                    <span className = "sign-up-link" onClick = {register}>Sign Up Now.</span> 
                </h4>
            </form>
        </div>
    )
}

export default SignUpScreen;
