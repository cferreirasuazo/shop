import React from "react";
import Box from '@material-ui/core/Box';
import Link from "react-router-dom/Link";
import "./index.css";


const Profile = () => (
   <Box className={"profile-box"}  display="flex" flexDirection="column">
       <Box>
       <Box className={"account-item"}>
           <h1 className={"title"}><i className="fa fa-user-circle" aria-hidden="true"></i> My Account</h1>
           <ul className={"list"}>
                <li className={"list-item"}><Link to={"/user/profileinfo"}>Change Profile Info</Link></li>
                <li className={"list-item"}>Change your password</li>
                <li className={"list-item"}>Modify your address entries</li>
           </ul>
       </Box>

       <Box className={"account-item"}>
           <h1 className={"title"}><i className={"fa fa-shopping-bag"} aria-hidden="true"></i> My Orders</h1>
           <ul className={"list"}>
                <li className={"list-item"}>View your order history</li>
                <li className={"list-item"}>View your return request</li>
                
           </ul>
       </Box>

       <Box className={"account-item"}>
           <h1 className={"title"}><i className="fa fa-sign-out" aria-hidden="true"></i> Log Out</h1>
           <ul className={"list"}>
                <li className={"list-item"}> Click here to log out your account</li>
           </ul>
       </Box>

        

       </Box>
       

   </Box>
)

export default Profile