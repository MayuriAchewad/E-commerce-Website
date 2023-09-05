import { Grid } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import  './nav.css';

export const Nav=()=>{

    const[drop1, setDrop1]= useState(true);
    const[drop2, setDrop2]= useState(true);

    const handleToggle = (one) => {
        if(one === "one"){
            setDrop1((state)=>!state)
        } else {
            setDrop2((state) => !state);
          }
    }

    return(
        <main className="show">
            <h4 onClick={() => handleToggle("one")}> {drop1 ? "+" : "-"} View </h4>
        <ul>
          <li>Project</li>
          <li>Part / BoM</li>
          <li>Process Plan</li>
          <li>Production</li>
          <li>Order</li>
        </ul>
       
            
        </main>
    )
}