import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginForm } from "../Forms/LoginForm";
import { RegisterForm } from "../Forms/RegisterForm";
import { Nav } from "./Nav";
import { Home } from "../Main/Home";

export const Landing = () =>{
    return(
        <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" element={<LoginForm/>} />
            <Route path="/register" element={<RegisterForm/>} />
            <Route path="/home" element={<Home/>} />
        </Routes>
        </BrowserRouter>
    )
}