import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import Routess from "./Components/Routes/Routess";
import Burger2 from "./Components/Burger2/Burger2";


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
