import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { ProductsList } from "./ProductsList";
import { CartList } from "./CartList";
import AddProduct from "./AddProduct";
import Nav from "./Nav";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const Landing=()=>{
    return(
        <BrowserRouter>
        <Nav/>
            <Routes>
                <Route path="/prod" element={<ProductsList/>}/>
                <Route path="/cart" element={<CartList/>}/>
                <Route path="/" element={<LoginForm/>}/>
                <Route path="/addprod" element={<AddProduct/>}/>
                <Route path="/register" element={<RegisterForm/>}/>
            </Routes>
        </BrowserRouter>
    )
}