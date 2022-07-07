import React from 'react';
import s from './Contacts.module.css'
import instaLogo from '../../img/instagram.png'
import vkLogo from '../../img/vk.png'

const Contacts = () => {
    return (
        <div className={s.main}>
            <div className={s.text}>Наталья Весна</div>
            <div className={s.text}>свадебный и портретный фотограф</div>
            <div className={s.text}>+7 (999)-827-29-34</div>
        </div>
    );
};

export default Contacts;