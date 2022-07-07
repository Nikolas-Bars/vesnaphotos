import React from 'react';
import instaLogo from "../../img/instagram.png";
import vkLogo from "../../img/vk.png";
import s from './Footer.module.css'
import {motion} from 'framer-motion'

const textAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: (custom: number) =>({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.2} // функция для настройки времени анимации
    })
}

export const Footer = () => {
    return (
        <motion.p
            custom={1}
            variants={textAnimation}
            initial='hidden'
            whileInView='visible'
            className={s.main}>
            <div className={s.imageBlock}><img width={25} src={instaLogo}/> <img width={25} src={vkLogo}/> </div>
            <span className={s.imageBlock}>Профессиональный фотограф Наталья Весна | Москва | +7 (999) 827 29 34 |   </span><br/>
            <span className={s.imageBlock}>Свадебный фотограф | Детский фотограф | Семейный фотограф |  Фотограф на крещение |   </span>
            <div >Фотосессия беременности  </div>
        </motion.p>
    );
};
