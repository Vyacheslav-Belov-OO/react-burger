import React from 'react';
import style from './burger-constructor.module.css'
import ShortCard from '../short-card';
import {  CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructor= () => {
    return (
        <div className={`pt-25 pl-4 pr-4 pb-10 ${style.burger_constructor}`}>
            <ShortCard />
            
            <div className={`pt-10 ${style.order_block}`}>
                <div className={`mr-10 ${style.order_block_price}`}>
                    <p className={`text text_type_digits-medium ${style.order_price}`}>610</p>
                    <CurrencyIcon type="primary" />
                </div>
                    
                <Button type="primary" size="large">Оформить заказ</Button>
            </div>
           
            
        </div>
    );
};

export default BurgerConstructor
;