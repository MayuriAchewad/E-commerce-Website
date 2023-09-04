import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React from "react";
import ReactDOM from 'react-dom';
import * as Yup from "yup";
import { useFormik } from "formik";

const validationSchema = Yup.object({
  fname: Yup.string().min(2).max(8).required("Require"),
  mname: Yup.string().min(2).max(12).required("Required"),
  lname: Yup.string().min(2).max(12).required("required"),
  email: Yup.string("Enter your email")
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ).email("Invalid email address format")
    .required("Email is required"),
  mob: Yup.number().min(2).max(10).required("req"),
  dob: Yup.string().required("required"),
  gender: Yup.string().required("required"),
  username: Yup.string().required("required"),
  password: Yup.string().min(4,'Password must be at 4 char long').required("Password is mendatory"),
  confirmpass: Yup.string().required("required").oneOf([Yup.ref('password')],'Passwords does not match'),
});

export const RegisterForm = () => {
  const initialValues = {
    fname: "",
    mname: "",
    lname: "",
    email: "",
    mob: "",
    dob: "",
    gender: "",
    username: "",
    password: "",
    confirmpass: "",
  };

  
  const formik = useFormik({
    initialValues: initialValues,
    
    validationSchema: validationSchema,
    onSubmit : (values) => {
        // await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
        // console.log("---->", values);
        // alert("Form is validated! Submitting the form...")
        // alert("Form is validated and in this block api call should be made...");
      },
  });
  console.log(formik.values, "------------>");

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        spacing={2}
        sx={{
          width: { xs: 200, sm: 350, md: 500, lg: 650, xl: 700 },
          margin: "0px auto",
          border: "10px inset brown",
          padding: "20px",
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <h2 style={{ color: "brown", textAlign: "center" }}>
            Registration Form
          </h2>
          <hr />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <TextField
          id="fname"
            required
            name="fname"
            value={formik.values.fname}
            onChange={formik.handleChange}
            placeholder="First Name"
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <TextField
          id="mname"
            required
            name="mname"
            value={formik.values.mname}
            onChange={formik.handleChange}
            placeholder="Middle Name"
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <TextField
          id="lname"
            required
            name="lname"
            value={formik.values.lname}
            onChange={formik.handleChange}
            placeholder="Last Name"
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
          <TextField
          id="email"
            required
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="email-id"
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
          <TextField
          id="mob"
            required
            name="mob"
            value={formik.values.mob}
            onChange={formik.handleChange}
            type="number"
            placeholder="Mobile Number"
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <span>DOB</span>
          <TextField
          id="dob"
            required
            value={formik.values.dob}
            onChange={formik.handleChange}
            placeholder="DOB"
            type="date"
            name="dob"
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <FormControl
            required
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            variant="filled"
          >
            <FormLabel>Gender</FormLabel>
            
            <RadioGroup
              row
              id="gender"
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
          <TextField
          id="username"
            required
            value={formik.values.username}
            onChange={formik.handleChange}
            name="username"
            type="text"
            placeholder="User Name"
            fullWidth
            variant="filled"
          />
          {formik.errors ? (
            <span style={{ color: "red" }}>{formik.errors.username}</span>
          ) : null}
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
          <TextField
          id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            name="password"
            required
            type="password"
            placeholder="Password"
            fullWidth
            variant="filled"
          />
          {formik.errors ? (
            <span style={{ color: "red" }}>{formik.errors.password}</span>
          ) : null}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
          <TextField
          id="confirmpass"
            value={formik.values.confirmpass}
            onChange={formik.handleChange}
            required
            name="confirmpass"
            type="password"
            placeholder="Confirm Password"
            fullWidth
            variant="filled"
          />
          {formik.errors ? (
            <span style={{ color: "red" }}>{formik.errors.confirmpass}</span>
          ) : null}
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <Button fullWidth variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <Button fullWidth variant="contained" type="reset">
            Cancel
          </Button>
        </Grid>
        {/* {formik.isSubmitting ? (<h1>{formik.isSubmitting}</h1>) : (<h1>Confirmation of Login</h1>)} */}
      </Grid>
    </form>
  );
};
// ReactDOM.render(<RegisterForm />, document.getElementById('root'));
// ReactDOM.render(<RegisterForm/>, document.getElementById('root'))

