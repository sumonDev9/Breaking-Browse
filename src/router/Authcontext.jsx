import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from '../Firebase/Firebase_init';


export const  AuthContext = createContext();
const auth = getAuth(app);


const Authcontext = ({children}) => {

    const [user, setUser] = useState(null);
    console.log(user)

    // create new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // 
    useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    },[]);
    const authInfo = {
        user, 
        setUser,
        createUser
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authcontext;