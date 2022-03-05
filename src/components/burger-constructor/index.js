import React from 'react';
import style from './burger-constructor.module.css'
import { DragIcon, CurrencyIcon, LockIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructor= () => {
    return (
        <div className={`pt-25 pl-4 pr-4 ${style.burger_constructor}`}>
            <div className=''>
                <div className=''>
                    <DragIcon type="primary" />
                    <img className='' src='' alt="avatar" />
                    <p className="text text_type_main-default">dog.</p>
                    <p className="text text_type_digits-default">1234567890</p>
                    <CurrencyIcon type="primary" />
                    <LockIcon type="secondary" />
                </div>
            </div>
            <div>
                <p className="text text_type_digits-medium">1234567890</p>
                <CurrencyIcon type="primary" />
                <Button type="primary" size="large"> Нажми на меня</Button>
            </div>
            
        </div>
    );
};

export default BurgerConstructor
;