import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_MODAL, OPEN_MODAL } from '../../services/actions/modal';


const Modal = (props) => {

    const dispatch = useDispatch();
    
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

    const active = useSelector((state) => state.modal.isOpen);
   
    
    
    function onClose() {
        dispatch({
            type: CLOSE_MODAL,
            ingridientModal: false,
            orderModal: false,
            isOPen:false,
            
        })
    }

   
   
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

// Modal.propTypes= {
//     active: PropTypes.bool.isRequired,
//     onClose: PropTypes.func.isRequired  
// }


export default Modal;