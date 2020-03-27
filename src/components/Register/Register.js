import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Formik, Form, Field } from 'formik';
import { Button} from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import "./styles.css"
import axios from "axios";
import {history} from "../../utils/history";

const Register = () =>{
    
    const [emailExist, setEmailExist] = useState(false);
    const [isSuccessful, setSuccessful] = useState(false);
    const dispatch = useDispatch()
    return (
        <Container className={"register-box"}>
        <h1>Profile Info</h1>
        <Formik
            initialValues={{
                    nombre: '',
                    apellido: '',
                    direccion: '',
                    correo: '',
                    password: '',
                    check_password: ''
                }}
            validate={values => {
                const errors = {};
                if (!values.correo) {
                  errors.correo = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)
                ) {
                  errors.correo = 'Invalid correo direccion';
                }

                if(!values.nombre){
                    errors.nombre = 'Required'
                }

                if(!values.apellido){
                  errors.apellido = 'Required'
                }
                
                if(!values.direccion){
                  errors.direccion = 'Required'
                }              
                if(!values.password){
                  errors.password = 'Required'
                  errors.check_password = "Required"
                }else if (values.password !== values.check_password){
                  errors.password = "password must be the same"
                }

                return errors;
            }}
  onSubmit={(values, {setSubmitting, resetForm}) => {
        setSubmitting(false)
        var cliente = Object.assign({},values)
        const url = "http://localhost:4000/api/register"
        axios.post(url, {cliente}).then(({data})=>{
              dispatch({type:"FETCH_CLIENT",payload: data.info})
              dispatch({type:"SET_LOG",payload:true})
              setEmailExist(true)
              resetForm()
              history.push("/")    
        })
  
        
        //         
  }}
>
  {({ submitForm, isSubmitting }) => (
    <Form>
    <h1>Your Personal Information</h1>
      <Box>
      <Field 
        component={TextField}
        name="nombre"
        type="text"
        label="Name"
      />
      
      <Field 
        component={TextField}
        type="text"
        label="Lastname"
        name="apellido"
      />
      </Box>

   
      <br />
      
      <Field 
        component={TextField}
        type="text"
        label="Email"
        name="correo"
      />
   
      <br />
   
      <h1>Address Informacion</h1>

      <Field 
        component={TextField}
        multiline
        rows="2"
        rowsMax={6}
        type="text"
        label="Address"
        name="direccion"
        
      />
   
      <br />

      <h1>Your Password</h1>
      <Field 
        component={TextField}
        name="password"
        type="password"
        label="Password"
      />

      <br />
      <Field 
        component={TextField}
        name="check_password"
        type="password"
        label="Enter again password"
      />
      <br />

      <Button 
        variant="contained"
        color="primary"
        disabled={isSubmitting}
        onClick={submitForm}
      >
        Submit
      </Button>

      <h2 style={{display: emailExist ? "block" : "none"    }} >Sorry, that account already exist</h2>
      <h2 style={{display: isSuccessful ? "block" : "none"  }}>Successul</h2>
    </Form>
  )}
</Formik>

    </Container>
    )
}

export default Register;