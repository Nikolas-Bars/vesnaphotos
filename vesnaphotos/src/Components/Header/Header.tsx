import React from 'react';
import logo from '../../img/logo.png'
import s from './Header.module.css'
import ButtonBlock from "./ButtonBlock";
import Burger2 from "../Burger2/Burger2";


const Header = () => {
    return (
        <div className={s.mainBlock}>
            <Burger2/>
            <div className={s.imageAndButtonBlock}>
                <div>
                    <img className={s.logo} src={logo}/>
                </div>
<ButtonBlock/>
            </div>

        </div>
    );
};

export default Header;