import React from "react";
import Box from '@material-ui/core/Box';
import Link from "react-router-dom/Link";
import "./index.css";
import {useDispatch} from "react-redux";
import {SET_LOG} from "../../actions/clientActions";

const Profile = () => {
    const dispatch = useDispatch()
    
    function logOut(e){
        e.preventDefault()
        if(localStorage.getItem("client")){
            localStorage.clear()
            dispatch( { type:SET_LOG,payload:false } )
        }
        window.location.reload(false);
    }

    return (
        <Box className={"profile-box"}>
            
            <Box className={"account-item"}>
                <i className="fa fa-user-circle" aria-hidden="true"></i> 
                <h1 className={"title"}>My Account</h1>
                <div className={"list"}>
                     <div className={"list-item"}><Link to={"/user/profileinfo"}>Change Profile Info</Link></div>
                     <div className={"list-item"}>Change your password</div>
                     <div className={"list-item"}>Modify your address entries</div>
                </div>
            </Box>
     
            <Box className={"account-item"}>
                <i className={"fa fa-shopping-bag"} aria-hidden="true"></i>
                <h1 className={"title"}> My Orders</h1>
                <div className={"list"}>
                     <div className={"list-item"}>View your order history</div>
                     <div className={"list-item"}>View your return request</div>
                     
                </div>
            </Box>
     
            <Box onClick={logOut} className={"account-item"}>
                <i className="fa fa-sign-out" aria-hidden="true"></i> 
                <h1 className={"title"}>Log Out</h1>
                <div className={"list"}>
                     <div className={"list-item"}   > Click here to log out your account</div>
                </div>
            </Box>
     
        </Box>
     )
}

export default Profile