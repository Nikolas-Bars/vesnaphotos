import React from 'react';
import s from './Contacts.module.css'
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

const Contacts = () => {
    return (
        <motion.div
            custom={1}
            variants={textAnimation}
            initial='hidden'
            whileInView='visible'
            className={s.main}>

            <div   className={s.text}>Наталья Весна</div>
            <div className={s.text}>свадебный и портретный фотограф</div>
            <div className={s.phoneNumber}>+7 (999)-827-29-34</div>

        </motion.div>
    );
};

export default Contacts;