import React, {useState} from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";


const ButtonBlock = () => {

    const [selectToggle, setSelectToggle] = useState<boolean>(false)

    const onMouseOverHandler =()=>{
        setSelectToggle(true)
    }

    const onMouseOutHandler =()=>{
        setSelectToggle(false)
    }

    return (
        <div className={s.buttonBlock}>
            <div className={s.button}><NavLink to={'/main'}>ГЛАВНАЯ</NavLink></div>
            <div className={s.button}><NavLink to={'/portfolio'}>ПОРТФОЛИО</NavLink></div>
            <div className={s.button}>КОНТАКТЫ</div>
            <div onMouseOut={onMouseOutHandler} onMouseOver={onMouseOverHandler} className={s.button}>РЕКОМЕНДАЦИИ

                {selectToggle &&
                <div className={s.select}>
                    <div className={s.selectItem}>ВИЗАЖИСТЫ</div>
                    <div className={s.selectItem}>ФОТОСТУДИИ</div>
                    <div className={s.selectItem}>ПРОКАТ ПЛАТЬЕВ</div>
                </div>}
            </div>
        </div>
    );
};

export default ButtonBlock;