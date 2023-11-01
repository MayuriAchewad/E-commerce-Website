import React, { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import {  Button, Card, CardContent, Grid } from "@mui/material";
import { productReducer } from "../../state/Reducer/productReducer";
import axios from "axios";

export const CartList=()=>{
    const selectProduct=useSelector((state)=>state.productReducer.product)
    const [data, setData] = useState([selectProduct]);

    const getData = async () => {
      const result = await axios.get("http://localhost:1032/getcart");
      setData(result.data);
    };
  
    useEffect(() => {
      getData();
    }, []);

    const handleDelete=(item)=>{
      console.log("dfghjkl",item);
      axios.post("http://localhost:1032/delete",item)
      getData()
    }
    
    return(
      <Grid container spacing={2}>     
      {data.map((item) => (
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2} align="center">
                <Grid item xs={3}>
                  <img height={150} width={200} src={item.image} alt="" />
                </Grid>
                <Grid item xs={4}>
                  <h3><span>{item.title}...</span></h3>
                  <p>{item.description}...</p>
                </Grid>
                <Grid item xs={2}>
                  <h2>Rs. {item.price}</h2>
                </Grid>

                <Grid item xs={1}>
                  <Button fullWidth variant="contained" >Buy</Button>
                </Grid>
                <Grid item xs={1}>
                  <Button variant="contained" onClick={()=>handleDelete(item._id)} >Cancel</Button>
                </Grid>
               
                
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    )
}