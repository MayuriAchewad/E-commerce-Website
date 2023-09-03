import { Grid, TextField } from "@mui/material";
import React from "react";

export const RegisterForm=()=>{
    return(
        <form>
            <Grid container spacing={2}>
                <Grid item xl={12} ml={12} lg={12} mg={4} xs={4}>
                    <TextField fullWidth variant="standard"/>
                </Grid>
                <Grid item xl={12} sm={12} lg={12} mg={4} xs={4}>
                    <TextField fullWidth variant="standard"/>
                </Grid>
                <Grid item xl={12} ml={12} lg={12} mg={4} xs={4}>
                    <TextField fullWidth variant="standard"/>
                </Grid>
                <Grid item xl={12} sm={12} lg={12} mg={4} xs={4}>
                    <TextField fullWidth variant="standard"/>
                </Grid>
            </Grid>
        </form>
    )
}