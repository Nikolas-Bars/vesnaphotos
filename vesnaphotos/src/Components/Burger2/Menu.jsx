import React from 'react';
import s from './Menu.module.css'
import {NavLink} from "react-router-dom";

const Menu = ({header, items, setMenuActive, menuActive}) => {
    return (

        <div className={menuActive ? s.active : s.menu} onClick={() => setMenuActive(false)}>
            <div className={s.blur}/>
            <div className={s.menu_content} onClick={e => e.stopPropagation()}>
                <ul>
                    <li><NavLink to={'/main'} onClick={()=>setMenuActive(false)}>ГЛАВНАЯ</NavLink></li>
                    <li><NavLink to={'/portfolio'} onClick={()=>setMenuActive(false)}>ПОРТФОЛИО</NavLink></li>
                    <li><NavLink to={'/contacts'} onClick={()=>setMenuActive(false)}>КОНТАКТЫ</NavLink></li>
                    <li><NavLink to={'/recommendations'} onClick={()=>setMenuActive(false)}>РЕКОМЕНДАЦИИ</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;