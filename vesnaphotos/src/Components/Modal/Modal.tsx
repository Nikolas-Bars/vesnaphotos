import React from 'react';
import {Button, Modal} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Contacts from "../Contacts/Contacts";
import s from './Modal.module.css'
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import withStyles from "@material-ui/core/styles/withStyles";
import purple from "@material-ui/core/colors/purple";
import createTheme from "@material-ui/core/styles/createTheme";
import green from "@material-ui/core/colors/green";
import instaLogo from "../../img/instagram.png";
import vkLogo from "../../img/vk.png";
import {motion} from "framer-motion";


///стиль кнопок

const BootstrapButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#5fbd00',
        borderColor: '#5fbd00',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#2b6f00',
            borderColor: '#2b6f00',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#5fbd00',
            borderColor: '#5fbd00',
        },
        '&:focus': {
            backgroundColor: '#5fbd00',
            outline: 'none',
        },
    },
})(Button);

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    },
}))(Button);




const theme = createTheme({
    palette: {
        primary: green,
    },
});

//////////////////


function getModalStyle() {
    const top = 50
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        maxWidth: '95%',
        margin: '0 auto'

    },
    paper: {
        position: 'absolute',
        maxWidth: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        padding: '40px',
        borderRadius: '10px'
    },
}));

const ModalComponent = () => {

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <BootstrapButton variant="contained" onClick={handleOpen} className={s.button_text} color="primary" disableRipple >
                СВЯЗАТЬСЯ СО МНОЙ
            </BootstrapButton>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                className={classes.modal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div style={modalStyle} className={classes.paper}>
                            <h2 id="simple-modal-title" className={s.button_text} >Напишите мне!</h2>
                            <input placeholder={'E-mail'}/>
                            <input placeholder={'Phone number'}/>
                            <TextField
                                id="outlined-multiline-static"
                                label="Текст сообщения"
                                multiline
                                rows={4}
                                placeholder="Введите ваше сообщение"
                                variant="outlined"
                                style={{width: '100%', margin: '15px auto'}}
                            />
                            <div style={{margin: '15px auto', display: 'flex'}}>


                                <BootstrapButton variant="contained" className={s.button_text} color="primary" disableRipple >
                                    Отправить
                                </BootstrapButton>
                                <div className={s.imageBlock}>

                                    <a href={'https://www.instagram.com/vesna_photos/'}><img style={{margin: '5px'}} width={35} src={instaLogo}/></a>
                                    <a href={'https://vk.com/vesna_photos'}><img style={{margin: '5px'}} width={35} src={vkLogo}/></a></div></div>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};

export default ModalComponent