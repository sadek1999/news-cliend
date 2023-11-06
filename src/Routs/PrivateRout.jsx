import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRout = ({children}) => {
    const {user,loding}=useContext(AuthContext)
    if(loding){
        return <span className="loading loading-spinner text-error"></span>
    }
    if(user?.email){
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRout;