import React from 'react';
import logo from '../../img/logo.png'
import s from './Header.module.css'


const Header = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.image}>
                <div>
                    <img className={s.logo} src={logo}/>
                </div>
                <div className={s.buttonBlock}>
                    <div>Главная</div>
                    <div>Галерея</div>
                    <div>Контакты</div>
                </div>
            </div>

        </div>
    );
};

export default Header;