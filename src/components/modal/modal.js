import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import Img from '../../img/done.png';
import ModalOverlay from '../modal-overlay/modal-overlay';


const Modal = () => {
    const portal = document.getElementById("portal");
    const [modalActive, setModalActive] = React.useState(true);

    const onClose = () =>{
        setModalActive(!modalActive)
    }
    console.log(modalActive);


    return ReactDOM.createPortal(
        <>
            <ModalOverlay/>
            <div className={styles.wrapper}>
                
                <div className={styles.close}>
                    <CloseIcon type="primary" onClick={onClose}/>
                </div>
                <div className={styles.price}>
                    <p className="text text_type_digits-large">034536</p>
                </div>
                <div className={styles.order_ind}>
                    <p className="text text_type_main-medium">
                        идентификатор заказа
                    </p>
                </div>
                <div className={styles.check_mark}>
                    <img  src={Img}  />
                </div>
                <div className={styles.order_start}>
                    <p className="text text_type_main-default">
                        Ваш заказ начали готовить
                    </p>
                    <p className={`text text_type_main-default ${styles.blue_text}`}>
                        Дождитесь готовности на орбитальной станции
                    </p>
                </div>
            
            </div>
        </>,
        portal
        
    );
};

export default Modal;