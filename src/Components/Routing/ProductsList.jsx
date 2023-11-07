import { Button, Card, CardContent, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AddProduct from "./AddProduct";
import { CartList } from "./CartList";


export const ProductsList = ({handleupdate}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [copyData, setCopyData] = useState([]);

  const getData = async () => {
    const result = await axios.get("http://localhost:1032/getproduct");
    setData(result.data);
    setCopyData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);


  const handleAddCart =async(str) => {
    const type = "PRODUCTS";
    const payload = str;
    const action = { type, payload };
    dispatch(action);
    await axios.post("http://localhost:1032/addcart",str)   
    
  };
  const handleDelete=(item)=>{
    console.log("dfghjkl",item);
    axios.post("http://localhost:1032/delete",item)
    getData()
  }
  
 

  return (
    <Grid container spacing={2}>     

      <Grid item xs={12}>       
       
      </Grid>
      {data.map((item) => (
        <Grid item xs={3}>
          <Card sx={{bgcolor:"lightgray"}}>
            <CardContent>
              <Grid container spacing={2} align="center">
                <Grid item xs={12}>
                  <img height={200} src={item.image} alt="" />
                </Grid>
                <Grid item xs={12}>
                  <h3>{item.title.slice(1,50)}</h3>
                </Grid>

                <Grid item xs={12}>
                  <span>{item.description.slice(1,70)}</span>
                </Grid>

                <Grid item xs={12}>
                  <h2>Rs. {item.price}</h2>
                </Grid>

                <Grid item xs={6}>
                  <Button fullWidth variant="contained" onClick={() => handleAddCart(item)}>Add to cart</Button>
                </Grid>
                <Grid item xs={6}>
                  <Button fullWidth color="error" variant="contained" onClick={()=>handleDelete(item._id)} >delete</Button>
                </Grid>
                {/* <Grid item xs={6}>
                  <Button fullWidth color="warning" variant="contained" onClick={()=>handleupdate(item)} >Update</Button>
                </Grid> */}
                
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
