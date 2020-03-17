import React from "react";
import "./styles.css"
import ReactLoading from 'react-loading';

const Loading = () => (
    <div className={"loading"} >
        <ReactLoading color={"473d3d"} height={'10%'} width={'10%'} />
    </div>
) 

export default Loading