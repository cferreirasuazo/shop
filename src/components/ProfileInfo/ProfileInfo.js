import React, {useEffect} from "react"
import {connect} from "react-redux";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Formik, Form, Field } from 'formik';
import { Button} from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import "./styles.css"

const ProfileInfo = (props) => {
    
    return(
        <Box className={"profileinfo-box"}>
            <h1>Profile Info</h1>
            <Formik
      initialValues={{
        nombre: props.cliente.nombre,
        apellido: props.cliente.apellido,
        correo: props.cliente.correo
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
                 values.correo === cliente.correo ){
                    alert("No data changed")
                 }else{
                    alert("Data changed")
                 }

        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Field className={"profileinfo-box-label"}
            component={TextField}
            name="nombre"
            type="text"
            label="Name"
         
           
          />
          <br />
          <Field className={"profileinfo-box-label"}
            component={TextField}
            type="text"
            label="Lastname"
            name="apellido"
            
          />
       
          <br />
          <Field className={"profileinfo-box-label"}
            component={TextField}
            type="text"
            label="Email"
            name="correo"
            
          />
       
          <br />
          <Field className={"profileinfo-box-label"}
            component={TextField}
            multiline
            rowsMax={6}
            type="text"
            label="Address"
            name="address"
          />
       
          <br />
          <Button className={"profileinfo-box-bottom"}
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Submit
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


