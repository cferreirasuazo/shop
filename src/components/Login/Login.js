import React, {Component, useState} from "react";
import withRouter from "react-router-dom";
import {Container, Box, Button, TextField} from  "@material-ui/core";
import {connect} from "react-redux";
import {fetchClient} from "../../actions/clientActions";
import ProfileInfo from "../ProfileInfo/ProfileInfo"
import "./styles.css";

const Login = (props) => {
    var [username, setUsername] = useState("");
    var [password, setPassword] = useState(""); 

    function _handlerChange(e){
    
        if (e.target.id == "login-username"){
            setUsername(e.target.value)
        }else{
            setPassword(e.target.value)
        };
        
    }

    function getCredentials(){
        var cliente = {
            correo: "kyloren@mail.com",
            password: "kyloren"
        }   
        props.fetchClient(cliente);
        
        
    }

    return (
        <div>
        <Box className={"login-wrapper"} display="flex" flexDirection="column" alignItems="center">
            <TextField className={"login-input"} onChange={_handlerChange} required id="login-username" label="Username"  />
            <TextField className={"login-input"} onChange={_handlerChange} required id="login-password" label="Password"  />
            <Button onClick={getCredentials} className={"login-button"}>Login</Button>
        </Box>
        </div>  
    )
}

const mapDispatchToProps = {
    fetchClient   
}


export default connect(null,mapDispatchToProps)(Login)