import { Routes } from "react-router-dom";
import {BrowserRouter, Route } from "react-router-dom";
import Dados from "./Dados";
import Home from "./Home";
import Navbar from "./Navbar";

function Routes_() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/dados' element={<Dados/>} />
                <Route path='/' element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routes_;
