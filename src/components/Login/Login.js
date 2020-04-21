import React, {useState} from "react";
import {Box, TextField} from  "@material-ui/core";
import {connect} from "react-redux";
import {fetchClient} from "../../actions/clientActions";
import "./styles.css";

import {history} from "../../utils/history";

const Login = (props) => {
    var [email, setEmail] = useState("");
    var [password, setPassword] = useState(""); 
    var [isFound,setFound] = useState(true);

    function _handlerChange(e){
        if (e.target.id === "login-email"){
            setEmail(e.target.value)
        }
        
        if (e.target.id === "login-password"){
            setPassword(e.target.value)
        };
        
    }

    function getCredentials(){
        var cliente = {
            correo: email,
            password: password
        }   
        
        props.fetchClient(cliente).then((value)=>{
            history.push("/")
        },(error)=>{
            setFound(false)
        })
    }

    return (
        <Box className={"login-box"}>
        <Box className={"login-wrapper login-child"} display="flex" flexDirection="column">
            <TextField  style={{color: "#3b6978"}} variant="outlined" className={"login-input"} onChange={_handlerChange} required id="login-email" label="email"  />
            <TextField  style={{color: "#3b6978"}} variant="outlined" className={"login-input"} onChange={_handlerChange} required id="login-password" type="password" label="Password"  />
            <button className={"btn"} onClick={getCredentials}>Login</button>
         
            <p style={{display: !isFound ? "inline" : "none" }}>User Not Found </p>              
        </Box>
        <Box className={"register login-child"}>
            <h1>Get an account today!!</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipiscing elit pharetra.</p>
            <button className={"btn"} onClick={()=>(history.push("/user/register"))} >Continue</button>
        </Box>

        </Box>  
    )
}

const mapDispatchToProps = {
    fetchClient   
}


export default connect(null,mapDispatchToProps)(Login)