import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from "../firbase/firebase.confige";
import Login from './../Pages/Login/Login';


 export const AuthContext=createContext()
 const auht=getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)
    const[loding,setLoding]=useState(true)

    const singup=(email,password)=>{
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
        loding,
        singup,
        login,
        logout

    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;