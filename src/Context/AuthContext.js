import React, {createContext } from 'react';
import { getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider} from 'firebase/auth';
import app from '../firebase/firebase.init';

export const userContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthContext = ({children}) => {


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

    const userInfo = {singUpAuth , logInAuth , logInWithGoogle, logInWithGithub };
    return (
        <userContext.Provider value={userInfo}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;