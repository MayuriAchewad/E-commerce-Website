import { Alert, Button, Card, CardContent, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { ProductsList } from "./ProductsList";

const AddProduct = () => {
    // console.log("handleUpdate===============",handleU);
  const [image, setImage] = useState("");
  const [description, setDescr] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [rating, setrating] = useState();
  const [msg, setMsg] = useState("");
  const [category, setcategory] = useState("");
  const [condition, setCondition] = useState(false);
  const [_id,setId]=useState("")
  console.log("id",_id);

  const handleSubmit = async () => {
    if(condition==true){
      const payload = { image, description, title, price, rating ,category,_id};
      const result=await axios.post("http://localhost:1032/update", payload);
    }else{
    const payload = { image, description, title, price, rating ,category};
    const result=await axios.post("http://localhost:1032/addproduct", payload);
    setMsg(result.data)
    setImage("");
    setDescr("");
    setTitle("");
    setPrice("");
    setrating("");
    setcategory("")
  };}
  setTimeout(()=>{
    setMsg("")
  },5000)
  const handleupdate=(item)=>{
    setCondition(true)
    console.log("senditem",item);
    setImage(item.image);
    setDescr(item.description);
    setTitle(item.title);
    setPrice(item.price);
    setrating(item.rating)
    setcategory(item.category)
    setId(item._id)

  }
  
  return (
    <Grid container spacing={3} sx={{marginTop:5}}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8} sx={{border:"5px inset black",padding:2}}>
      <Grid container spacing={3} >
      {
        msg && <Alert severity="success">{msg}</Alert>
      }
      <Grid item xs={12}>
        
      </Grid>
        
      <Grid item xs={6}>
        <TextField
          value={image}
          onChange={(e) => setImage(e.target.value)}
          variant="outlined"
          fullWidth
          label="Enter Image link"
        />
      </Grid>
      
      <Grid item xs={6}>
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
          fullWidth
          label="Enter Title"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={description}
          onChange={(e) => setDescr(e.target.value)}
          variant="outlined"
          fullWidth
          label="Enter Description"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          variant="outlined"
          fullWidth
          label="Enter Price "
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          value={category}
          onChange={(e) => setcategory(e.target.value)}
          variant="outlined"
          fullWidth
          label="Enter Category "
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          value={rating}
          onChange={(e) => setrating(e.target.value)}
          variant="outlined"
          fullWidth
          label="Enter Rating "
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          onClick={handleSubmit}
          fullWidth
          variant="contained"
          color="success"
        >
          {condition?"Update":"submit"}
        </Button>
      </Grid>
      </Grid>
      </Grid>
      
    </Grid>
  );
};

export default AddProduct;