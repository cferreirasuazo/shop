import React, {useState} from "react";
import {Box, Button, TextField, Container} from  "@material-ui/core";
import {connect} from "react-redux";
import {fetchClient} from "../../actions/clientActions";

import "./styles.css";
import Link from "react-router-dom/Link";

const Login = (props) => {
    var [username, setUsername] = useState("");
    var [password, setPassword] = useState(""); 

    function _handlerChange(e){
    
        if (e.target.id === "login-username"){
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
        <Container className={"login-box"}>
        <Box className={"login-wrapper"} display="flex" flexDirection="column" alignItems="center">
            <TextField className={"login-input"} onChange={_handlerChange} required id="login-username" label="Username"  />
            <TextField className={"login-input"} onChange={_handlerChange} required id="login-password" label="Password"  />
            <Button onClick={getCredentials}>Login</Button>
           
        </Box>
        <Box className={"new-account-pop"}>
            <h1>Get an account today!!</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipiscing elit pharetra.</p>
            <Link to={"/user/register"}>Continue</Link>
        </Box>

        </Container>  
    )
}

const mapDispatchToProps = {
    fetchClient   
}


export default connect(null,mapDispatchToProps)(Login)