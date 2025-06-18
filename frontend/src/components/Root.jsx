import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Root = () => {

    const {user} = useAuth();
    const navigate = useNavigate();


    useEffect(()=>{
        if(user) {
 //chk if the user is authenticated and redirect according
 
 if(user.role === "admin") {
    navigate("/admin/dashboard");
 } else 
        }
    })

}