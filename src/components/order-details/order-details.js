import React from 'react';
import styles from './order-detail.module.css'
import Img from '../../img/done.png';

const OrderDetails = ({order_number, ...props}) => {
    

    return (
        <>
        
            <div className={styles.price}>
                <p className="text text_type_digits-large">{order_number ? order_number : "Loading"}</p>
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
            
        </>
    );
};

export default OrderDetails;