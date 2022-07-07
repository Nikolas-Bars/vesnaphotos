import React from 'react';
import s from "./Header.module.css";

const ButtonBlock = () => {
    return (
        <div className={s.buttonBlock}>
            <div className={s.button}>ГАЛЕРЕЯ</div>
            <div className={s.button}>ПОРТФОЛИО</div>
            <div className={s.button}>КОНТАКТЫ</div>
            <div className={s.button}>РЕКОМЕНДАЦИИ</div>
        </div>
    );
};

export default ButtonBlock;