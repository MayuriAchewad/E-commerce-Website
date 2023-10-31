import React, { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import {  Card, CardContent, Grid } from "@mui/material";
import { productReducer } from "../../state/Reducer/productReducer";
import axios from "axios";

export const CartList=()=>{
    const selectProduct=useSelector((state)=>state.productReducer.product)
    const [data, setData] = useState(selectProduct);

    // const getData = async () => {
    //   const result = await axios.get("http://localhost:1032/getcart");
    //   setData(result.data);
    // };
  
    // useEffect(() => {
    //   getData();
    // }, []);
    
    return(
      <div>
{
  data.map((item)=>(
        <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <img src={item.image} height={120} alt="" />
              <br />
              <span>{item.title}...</span>
              <br />
              {item.description}
              <br />
              {item.price}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
))}
      </div>
    )
}