import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Customers from "./pages/customers";
import React, {useContext, useEffect, useState} from "react";
import {AuthContext, AuthContextProvider} from "./context/authContext";
import Login from "./pages/Login";

function App() {
    const navigate = useNavigate()
    const location = useLocation()
    const {isLoggedIn} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)

    useEffect( () =>{
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[])

    useEffect(()=>{
        console.log(isLoggedIn)
    },[isLoggedIn])


    return (
        <Routes>
            <Route path={'login'} element={<Login/>}/>
            {
                isLoggedIn &&
                <>
                    {/*<Route path={""} element={<Navigate to={"/home"}/>}/>*/}
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/products' element={<Products/>}/>
                    <Route path='/customers' element={<Customers />}/>
                </>
            }

        </Routes>
    );
}

const AppWrapper = () =>{
    return(
        <AuthContextProvider>
            <React.StrictMode>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </React.StrictMode>
        </AuthContextProvider>
    )
}
export default AppWrapper;
