import React, { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import Add from '../Add/Add';
import Display from '../Display/Display';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Update from '../Update/Update';
import Header from './Header';
import { render } from '@testing-library/react';
export default function Routing() {
    const [userData, setUserData] = useState(null);
    let navigate = useNavigate();


    function getUserData() {
        let decodedToken = jwtDecode(localStorage.getItem('userToken'));
        //console.log(decodedToken);
        //console.log(userData);
        setUserData(decodedToken);

    }

    function logOut() {
        localStorage.removeItem('userToken');
        setUserData(null);
        // navigate('login');

    }


    useEffect(() => { console.log(userData) }, [userData]);

    return (
        <>
            {/* logOut={logOut}  */}
            <Header userData={userData} logOut={logOut} />
            <Routes >
                <Route path="/" exact element={ <Home />} />
                <Route path="/home" element={<Home />} />
                {/* <Route path="/update" element={<Update />} /> */}
                <Route path="/display" element={<Display />} />
                {/* setUserData={setUserData}  */}
                <Route path="/login" element={<Login getUserData={getUserData} />} />
                <Route path="/register" element={<Register />} />
                {/* <Route path="/add" element={<Add />} /> */}

            </Routes>
        </>

    )
}




