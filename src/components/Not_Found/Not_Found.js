import React from "react";
import {Box,Container,Button } from "@material-ui/core"
import WarningIcon from '@material-ui/icons/Warning';
import {history} from "../../utils/history";
import "./styles.css";

const NotFound = () => (
    <Container className={"not-found-container"}>
            <Box className={"not_found-box"}>
                <h1 className={"not-found-box__title"}>Oops</h1>
                <h2>404 - PAGE NOT FOUND  </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing, elit per habitant et malesuada natoque nostra, habitasse ut euismod sagittis massa. Magna lectus scelerisque luctus pellentesque phasellus curae ut varius, facilisis nibh in augue montes rutrum vulputate vel quam, lacus nec netus non accumsan tortor sociis. Eros nostra eu vivamus molestie himenaeos pellentesque, vel luctus blandit interdum est, inceptos ad tempus tristique semper.
                </p>
                <Button onClick={()=>(history.push("/"))}>Go home, nothing here</Button>
            </Box>
    </Container>
)


export default NotFound;