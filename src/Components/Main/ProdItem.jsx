import { Grid } from "@mui/material";
import React from "react";

export const ProdItem=({item})=>{
    return(
        <Grid container spacing={2} align="center">
            <Grid item xs={12}>
                <img height={120} width={100} src={item.image} alt="" />
            </Grid>
            <Grid item xs={12}>
                <span>{item.title.slice(20)}...</span> 
            </Grid>
            
            <Grid item xs={12}>
                <span>{item.description.slice(20)}...</span> 
            </Grid>

            <Grid item xs={12}>
                <span>{item.price}</span> 
            </Grid>
            
        </Grid>
    )
}