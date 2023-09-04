import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginForm } from "../Forms/LoginForm";
import { RegisterForm } from "../Forms/RegisterForm";
import { Nav } from "./Nav";

export const Landing = () =>{
    return(
        <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/ass" element={<LoginForm/>} />
            <Route path="/" element={<RegisterForm/>} />
        </Routes>
        </BrowserRouter>
    )
}