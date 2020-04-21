import React from "react";
import {Box} from "@material-ui/core"
import "./styles.css";
import HomeButton from "../HomeButton/HomeButton";

const NotFound = () => (
    <Box className={"not-found-container"}>
            <Box className={"not_found-box"}>
                <h1 className={"not-found-box__title"}>Oops</h1>
                <h2>404 - PAGE NOT FOUND  </h2>
                <HomeButton/>
            </Box>
    </Box>
)


export default NotFound;