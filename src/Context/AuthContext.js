import React, {createContext, useEffect, useState } from 'react';
import { getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, updateProfile, onAuthStateChanged} from 'firebase/auth';
import app from '../firebase/firebase.init';

export const userContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthContext = ({children}) => {
    const [user, setUser] = useState({})


//register 
const singUpAuth =(email , password)=>{
return createUserWithEmailAndPassword(auth, email, password)
}

// log in 
const logInAuth = (email ,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
    
 } 

 // log in with google
 const logInWithGoogle = ()=>{
  return signInWithPopup(auth, googleProvider)
 
 }

 //log in with github
 const logInWithGithub = ()=>{
    return signInWithPopup(auth, githubProvider)
 }
 //user profile update 
 const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
}

 // Log out 
 const logOut = ()=>{
    return signOut(auth)
}

useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, currentUser => {
        setUser(currentUser); 
    })
    return () => {
        unsubscribe();
    }
},[]);

    const userInfo = {
        singUpAuth , 
        logInAuth , 
        logInWithGoogle,
        logInWithGithub, 
        user , 
        logOut, 
        updateUserProfile
    };

    return (
        <userContext.Provider value={userInfo}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;