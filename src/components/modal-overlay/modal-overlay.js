import React from 'react';
import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = ({active, onClose}) => {

    return (
        <div className={active ? styles.modal_overlay : styles.modal_overlay_unactive} onClick={onClose}>
            
        </div>
    );
};
ModalOverlay.propTypes= {
    active: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired    

}
export default ModalOverlay;