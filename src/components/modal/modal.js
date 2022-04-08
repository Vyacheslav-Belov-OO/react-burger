import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'


const Modal = ({active, setActive, setModalOrder, setModalDetail, ...props}) => {
    
    const portal = document.getElementById("portal");    
    const onClose = () =>{
        setActive(false)
        setModalOrder(false)
        setModalDetail(false)
    };

    React.useEffect(() => {
        const closeModal = (e) => {
            if (e.key === "Escape" ) {
                onClose();
            }
        };
        document.addEventListener("keydown", closeModal);
        return () => {
            document.removeEventListener("keydown", closeModal);
        };
    }, []);
    


    return ReactDOM.createPortal(
        <>
            <ModalOverlay active={active} setActive={setActive} setModalOrder={setModalOrder} setModalDetail={setModalDetail}/>
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

export default Modal;