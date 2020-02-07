import React from "react"
import {connect} from "react-redux";
import Box from '@material-ui/core/Box';
import FormGroup from '@material-ui/core/FormGroup';

const ProfileInfo = (props) => {
    return(
    <Box>
         <p>{props.cliente.nombre}</p>
         <p>{props.cliente.apellido}</p>
         <p>{props.cliente.usuario}</p>
         <p>{props.cliente.correo}</p>
         
    </Box>
    )
}



const mapStateToProps = store =>({
    cliente:store.client.client
})

export default connect(mapStateToProps, null)(ProfileInfo);


