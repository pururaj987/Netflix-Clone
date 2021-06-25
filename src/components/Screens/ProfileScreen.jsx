import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import Nav from '../Nav';
import "./ProfileScreen.css";

function ProfileScreen() {

    const user = useSelector(selectUser);

    return (
        <div className = "profile-screen">
            <Nav/>
            <div className = "profile-body">
                <h1> Edit Profile </h1>
                <div className = "profile-info">
                    <img
                    src = "https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                    alt = ""
                    />
                    <div className = "profile-details">
                        <h2> {user.email} </h2>
                        <div className = "profile-plans">
                            <h3> Plans </h3>
                            
                            <button onClick = {() => auth.signOut()} className = "profile-signOut">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default ProfileScreen;
