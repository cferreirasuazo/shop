import React, {useState} from "react";
import {Box, Button, TextField, Container} from  "@material-ui/core";
import {connect} from "react-redux";
import {fetchClient} from "../../actions/clientActions";
import Link from "react-router-dom/Link";
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
        <Container className={"login-box"}>
        <Box className={"login-wrapper"} display="flex" flexDirection="column" alignItems="center">
            <TextField className={"login-input"} onChange={_handlerChange} required id="login-email" label="email"  />
            <TextField className={"login-input"} onChange={_handlerChange} required id="login-password" label="Password"  />
            <Button onClick={getCredentials}>Login</Button>
            <p style={{display: !isFound ? "inline" : "none" }}>User Not Found </p>              
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