import { Card, CardContent, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProdItem } from "./ProdItem";

export const Home=()=>{

    const [data, setData] = useState([])
    const [copyData, setCopyData] = useState([])
    const [txt, setTxt]= useState("")

    const getData=async()=>{
        const result = await axios.get("https://fakestoreapi.com/products")
        setData(result.data)
        setCopyData(result.data)
    }
    
    useEffect(()=>{
        getData()
    },[])

    return(
        <Grid container spacing={2}>
            <h1>My home</h1>
            <Grid item xs={12}>

            </Grid>
                {
                    data.map((item)=>(
                        <Grid item xs={3}>
                        <Card>
                            <CardContent>
                                <ProdItem item={item}/>
                            </CardContent>
                        </Card>
                        </Grid>
                    )
                    )
                }
            
        </Grid>
    )
}