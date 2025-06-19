import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Root = () => {

    const {user} = useAuth();
    const navigate = useNavigate();


    useEffect(()=>{
        if(user) {
 //chk if the user is authenticated and redirect according
 
 if(user.role === "admin") {
    navigate("/admin/dashboard");
 } else if(user.role === "customer"){
navigate("/customer/dashboard");
 } else {
    navigate("/login")
 }
        } else {
            navigate("/login")
        }
    }, [user,navigate]);
    return null;
}

export default Root;