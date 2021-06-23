import React from 'react'
import "./SignUpScreen.css";

function SignUpScreen() {
    return (
        <div className = "sign-up">
            <form>
                <h1>Sign In</h1>
                <input type = "email" placeholder = "Email" />
                <input placeholder = "Password" type = "password" />
                <button type = "submit">Sign In</button>
                <h4>
                    <span className = "sign-up-grey">New To Netflix?</span> Sign Up Now. 
                </h4>
            </form>
        </div>
    )
}

export default SignUpScreen;
