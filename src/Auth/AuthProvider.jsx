import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firbase/firebase.confige";



 export const AuthContext=createContext()
 const auht=getAuth(app)

const AuthProvider = ({children}) => {
    const[profile,setprofile]=useState(null)
    const [user,setuser]=useState(null)
    const[loding,setLoding]=useState(true)
    const provider = new GoogleAuthProvider();
  

    const googlelogin=()=>{
        return signInWithPopup(auht,provider)
    }
    const singup=(email,password,profile)=>{
        return createUserWithEmailAndPassword(auht,email,password)
    }
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auht,email,password)
    }
    const logout=()=>{
        return signOut(auht)
    }
    useEffect(()=>{
        const unsubscrib=onAuthStateChanged(auht,currentuser=>{
            setuser(currentuser)
            setLoding(false)
        })
        return ()=>{
            unsubscrib()
        }
    },[])

    const info ={
        user,
        profile,
        loding,
        singup,
        login,
        logout,
        googlelogin

    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;