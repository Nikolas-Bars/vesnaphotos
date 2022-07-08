import React from 'react';
import s from './Portfolio.module.css'
import p1 from '../../img/01.jpg'
import p2 from '../../img/02.jpg'
import p3 from '../../img/03.jpg'
import p4 from '../../img/04.jpg'
import p5 from '../../img/05.jpg'


const Portfolio = () => {
    return (
        <div>
        <div className={s.main}>
            <div className={s.p_1}><img src={p1}/><p className={s.text}>Portraits</p></div>
            <div className={s.p_1}><img src={p2}/><p className={s.text}>Love story</p></div>
            <div className={s.p_1}><img src={p3}/><p className={s.text}>Wedding</p></div>

        </div>
    <div className={s.bottomImageBlock}>
        <div className={s.p_2}><img src={p4}/><p className={s.text}>Семья и дети</p></div>
        <div className={s.p_2}><img src={p5}/><p className={s.text}>Беременность</p></div>
    </div>
        </div>
    );
};

export default Portfolio;