import React from "react";
import {useHistory} from "react-router-dom";
import { Button} from "@material-ui/core";

const styles = {
    width:"200px",
    height:"40px",
    cursor:"pointer",
    margin: "auto",
    borderRadius:"50px",
    textAlign:"center",
    fontsize:"16px",
    border: "1px solid transparent",
    backgroundColor: "#204051",
    color: "#cae8d5"
}


const HomeButton = () => {

    const history = useHistory()

    return (
        <Button style={styles} onClick={()=>(history.push("/"))}  >Go Home</Button>
    )
}


export default HomeButton;