import React from 'react';
import Contacts from "../Contacts/Contacts";
import {SimpleSlider} from "../Slider2/Slider2";




const MainPage = () => {
    return (
        <div>
            {/*<Slider/>*/}
            <SimpleSlider/>
            <Contacts />
        </div>
    );
};

export default MainPage;