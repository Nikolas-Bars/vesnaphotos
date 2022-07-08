import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import PhotoGalery from "../PhotoGallery/PhotoGallery";
import Portfolio from "../Portfolio/Portfolio";

const Routess = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/main' element={<MainPage/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
        </Routes>
    );
};

export default Routess;