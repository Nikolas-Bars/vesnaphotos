import React, {useState} from 'react';
import Contacts from "./Contacts";
import {Modal} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ModalComponent from "../Modal/Modal";
import ava from '../../img/ava.jpg'
import s from './Contacts.module.css'


const ContactsPage = () => {

    const [toggleModal, setToggleModal] = useState<boolean>(false)



    return (
        <div>
            <div className={s.div_img}><img src={ava} /></div>
         <ModalComponent />
        </div>
    );
};

export default ContactsPage;