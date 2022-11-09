import React, {createContext } from 'react';
import { getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../firebase/firebase.init';

export const userContext = createContext()
const auth = getAuth(app)

const AuthContext = ({children}) => {


//register 
const singUpAuth =(email , password)=>{
return createUserWithEmailAndPassword(auth, email, password)
}

//log in

// const logInAuth = (email,password)=>{
//     signInWithEmailAndPassword(auth, email, password)
// }

const logInAuth = (email ,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
    
 } 

    const userInfo = {singUpAuth , logInAuth};
    return (
        <userContext.Provider value={userInfo}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;