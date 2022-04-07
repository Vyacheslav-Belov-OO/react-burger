import React from 'react';
import styles from './modal-overlay.module.css';

const ModalOverlay = ({active, setActive}) => {

    const onCloseHModal= () => {
        setActive(false)
    }

    return (
        <div className={active ? styles.modal_overlay : styles.modal_overlay_unactive} onClick={onCloseHModal}>
            
        </div>
    );
};

export default ModalOverlay;