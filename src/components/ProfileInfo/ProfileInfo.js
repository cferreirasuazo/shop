import React from "react"
import {connect,useDispatch} from "react-redux";
import Box from '@material-ui/core/Box';
import { Formik, Form, Field } from 'formik';
import { Button} from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import "./styles.css"
import {updateClient} from "../../actions/clientActions";
import styles from "./styles"
const ProfileInfo = (props) => {
    var dispatch = useDispatch()
    var classes = styles()
    
    return(
        <Box className={classes.root}>
            <h1>Profile Info</h1>
            <Formik
      initialValues={{
        nombre: props.cliente.nombre,
        apellido: props.cliente.apellido,
        correo: props.cliente.correo,
        direccion: props.cliente.direccion
      }}
      validate={values => {
        const errors = {};
        if (!values.correo) {
          errors.correo = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)
        ) {
          errors.correo = 'Invalid correo address';
        }

        if(!values.nombre){
          errors.nombre = "Name Required"
        }
        
        if(!values.apellido){
          errors.apellido = "Lastname Required"
        }


        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          var {cliente} = props;
          if(values.nombre === cliente.nombre && 
              values.apellido === cliente.apellido &&
              values.direccion === cliente.direccion){
                    alert("No data changed")
                 }else{
                    var update = {}
                    for (var key in values){
                       if(values[key] !== cliente[key]){
                         update[key] = values[key]
                       }
                    } 
                    
                   update = Object.assign(update,{correo:cliente.correo})
                   dispatch(updateClient(update))
                 }

        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Field className={classes.label}
            component={TextField}
            name="nombre"
            type="text"
            label="Name"
            variant="outlined"
         
           
          />
          <br />
          <Field className={classes.label}
            component={TextField}
            type="text"
            label="Lastname"
            name="apellido"
            variant="outlined"
            
          />
       
          <br />
          <Field className={classes.label}
            component={TextField}
            type="text"
            label="Email"
            disabled
            name="correo"
            variant="outlined"
            
          />
       
          <br />
          <Field className={classes.label}
            component={TextField}
            multiline
            rowsMax={6}
            type="text"
            label="Address"
            name="direccion"
            variant="outlined"
          />
       
          <br />
          <Button className={classes.button}
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Update Info
          </Button>
        </Form>
      )}
    </Formik>

        </Box>
    )
}




const mapStateToProps = store =>({
    cliente:store.client.client,
   
})

export default connect(mapStateToProps, null)(ProfileInfo);


