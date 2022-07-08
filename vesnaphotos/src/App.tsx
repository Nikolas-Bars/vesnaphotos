import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Slider from "./Components/Slider/Slider";
import Contacts from "./Components/Contacts/Contacts";
import {Footer} from "./Components/Footer/Footer";
import PhotoGalery from "./Components/PhotoGallery/PhotoGallery";
import MainPage from "./Components/MainPage/MainPage";
import Routess from "./Components/Routes/Routess";


function App() {
  return (
    <div className="App">
     <Header />
        <Routess/>
     <Footer />
{/*   <PhotoGalery/>*/}
    </div>
  );
}

export default App;
