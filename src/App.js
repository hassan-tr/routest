import logo from './logo.svg';
import './App.css';
import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Customers from "./pages/customers";
import {useEffect} from "react";

function App() {
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        console.log('homepage: ',location.pathname)
        if (location.pathname === '/')
            navigate('/home')
    }, [])
    return (
        <Routes>
            <Route path={""} element={<Navigate to={"/home"}/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/customers' element={<Customers />}/>
        </Routes>
    );
}

export default App;
