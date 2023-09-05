import { Grid } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import styles from './nav.css';
// import { Landing } from "./Landing";

export const Nav=()=>{

    const[drop1, setDrop1]= useState(true);
    const[drop2, setDrop2]= useState(true);

    const handleHide = (item) => {
        if(item === "item"){
            setDrop1((state)=>!state)
        }
    }

    return(
        <Grid container spacing={2}>
            <Grid item xs={1}>
                <span onClick={()=>handleHide("item")}>
                {drop1 ? "-" : "+"}
                <MenuIcon />
                </span>
                <span className={drop1 ? styles.show : styles.hide}>
                <h3>Home</h3>
                <h3>About</h3>
                </span>
            </Grid>
        </Grid>
    )
}