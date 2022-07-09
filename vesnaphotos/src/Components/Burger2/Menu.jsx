import React from 'react';
import s from './Menu.module.css'

const Menu = ({header, items, setMenuActive, menuActive}) => {
    return (

        <div className={menuActive ? s.active : s.menu} onClick={() => setMenuActive(false)}>
            <div className={s.blur}/>
            <div className={s.menu_content} onClick={e => e.stopPropagation()}>
                <ul>
                    <li>ГЛАВНАЯ</li>
                    <li>ПОРТФОЛИО</li>
                    <li>КОНТАКТЫ</li>
                    <li>РЕКОМЕНДАЦИИ</li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;