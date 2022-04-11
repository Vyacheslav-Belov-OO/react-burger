import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';


const Modal = ({active, onClose, ...props}) => {
    
    const portal = document.getElementById("portal");    
  
    React.useEffect(() => {
        const onClose = (e) => {
            if (e.key === "Escape" ) {
                onClose();
            }
        };
        document.addEventListener("keydown", onClose);
        return () => {
            document.removeEventListener("keydown", onClose);
        };
    }, []);
    


    return ReactDOM.createPortal(
        <>
            <ModalOverlay active={active} onClose={onClose}/>
            <div className={active ? styles.modal : styles.modal_active}>
                <div className={styles.close}>
                    <CloseIcon type="primary" onClick={onClose} />
                </div>
                {props.children}
            </div>
        </>,
        portal
        
    );
};

Modal.propTypes= {
    active: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired  
}


export default Modal;