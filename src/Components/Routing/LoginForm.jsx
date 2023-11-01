import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().min(6).max(12).required("Required username"),
  password: Yup.string().min(6).max(12).required("Required username"),
});

export const LoginForm = () => {
  const[userName,setUsename]=useState("")
  const[password,setPassWord]=useState("")

    const navigate = useNavigate();

   


  const initialValues = {
    username: "",
    password: "",
  };
 

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.values);
  const handleSubmit=()=>{
    const name="mayuri"
    const pass="12345"
    if(formik.values.username===name && formik.values.password===pass){
      navigate("/addprod")
    }else{

      console.log("username or password does not match");
    }
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        spacing={2}
        sx={{
          width: { xs: 200, sm: 350, md: 500, lg: 650, xl: 700 },
          margin: "30px auto",
          border: "10px inset brown",
          padding: "20px",
        }}
      >
        <Grid item xs={12}>
          <h2 style={{ textAlign: "center" }}>Login Here...</h2>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            type="text"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained" type="submit" onClick={handleSubmit}>
            Login
          </Button>
        </Grid>
        <Grid item xs={12}>
          <p>
            If you Dont have an account please.{" "}
            <span style={{ color: "red" }}>
              <Link to="/register"> Register here</Link>
            </span>
          </p>
        </Grid>
      </Grid>
    </form>
  );
};
