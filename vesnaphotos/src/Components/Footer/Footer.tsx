import React from 'react';
import instaLogo from "../../img/instagram.png";
import vkLogo from "../../img/vk.png";
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <p className={s.main}>
            <div className={s.imageBlock}><img width={50} src={instaLogo}/> <img width={50} src={vkLogo}/> </div>
            <span className={s.imageBlock}>Профессиональный фотограф Наталья Весна | Москва | +7 (999) 827 29 34 |   </span><br/>
            <span className={s.imageBlock}>Свадебный фотограф | Детский фотограф | Семейный фотограф |  Фотограф на крещение |   </span>
            <div >Фотосессия беременности  </div>
        </p>
    );
};
