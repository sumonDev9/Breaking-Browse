import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/Firebase_init';


export const  AuthContext = createContext();
const auth = getAuth(app);


const Authcontext = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user)

    // create new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // logout
    const logout = () => {
        return signOut(auth)
    }

    // login
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // updated profile
    const updateUserProfile = (updaedData) => {
        return updateProfile(auth.currentUser, updaedData);
    }

    // 
    useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    },[]);
    const authInfo = {
        user, 
        setUser,
        createUser,
        logout, 
        userLogin,
        loading,
        updateUserProfile
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authcontext;