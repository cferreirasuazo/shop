import React from "react";
import {connect} from "react-redux";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Formik, Form, Field } from 'formik';
import { Button} from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import "./styles.css"

const Register = () =>{
    return (
        <Container className={"register-box"}>
        <h1>Profile Info</h1>
        <Formik
            initialValues={{
                    email: '',
                    password: '',
                }}
            validate={values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
  }}
  onSubmit={(values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
    }, 500);
  }}
>
  {({ submitForm, isSubmitting }) => (
    <Form>
    <h1>Your Personal Information</h1>
      <Box>
      <Field 
        component={TextField}
        name="name"
        type="text"
        label="Name"
      />
      
      <Field 
        component={TextField}
        type="text"
        label="Lastname"
        name="lastname"
      />
      </Box>

   
      <br />
      <Field 
        component={TextField}
        type="text"
        label="Email"
        name="email"
      />
   
      <br />
      <Field 
        component={TextField}
        multiline
        rows="4"
        rowsMax={6}
        type="text"
        label="Address"
        name="address"
        
      />
   
      <br />

  
      <h1>Address Informacion</h1>

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
        name="check-password"
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
    </Form>
  )}
</Formik>

    </Container>
    )
}

export default Register;