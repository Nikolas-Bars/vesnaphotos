import React, {useState} from 'react';
import s from './Burger2.module.css'
import Menu from "./Menu";
import burgerIcon from '../../img/burger.png'
import closeIcon from '../../img/close.png'

const Burger2 = () => {

    const [menuActive, setMenuActive] = useState(false)

    return (
        <div className={s.main}>
            <div className={menuActive ? s.nav_close : s.nav} onClick={()=>{setMenuActive(!menuActive)}}>
                    {!menuActive ? <img src={burgerIcon} width={'40px'} alt={'burgerIcon'}/> : <img src={closeIcon} className={s.close_icon} width={'20px'} alt={'burgerIcon'}/>}
                    {/*<span/>*/}

            </div>
            <Menu menuActive={menuActive} setMenuActive={setMenuActive}/>
        </div>
    );
};

export default Burger2;