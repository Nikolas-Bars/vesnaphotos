import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import PhotoGalery from "../PhotoGallery/PhotoGallery";
import Portfolio from "../Portfolio/Portfolio";
import Portraits from "../Portfolio/Pages/Portraits";
import LoveStory from "../Portfolio/Pages/LoveStory";
import Wedding from "../Portfolio/Pages/Wedding";
import Family from "../Portfolio/Pages/Family";
import Pregnancy from "../Portfolio/Pages/Pregnancy";
import ContactsPage from "../Contacts/ContactsPage";

const Routess = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/main' element={<MainPage/>}/>
            <Route path='/contacts' element={<ContactsPage/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/portraits' element={<Portraits/>}/>
            <Route path='/lovestory' element={<LoveStory/>}/>
            <Route path='/wedding' element={<Wedding/>}/>
            <Route path='/family' element={<Family/>}/>
            <Route path='/pregnancy' element={<Pregnancy/>}/>
        </Routes>
    );
};

export default Routess;