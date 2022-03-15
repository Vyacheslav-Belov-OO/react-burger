import React from 'react';
import { DragIcon, CurrencyIcon, LockIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './short-card.module.css';
import data from './../../static/data.json';

const ShortCard = () => {

    const card_data=data;

    return (
        <>
            {card_data.map((item, key)=>(
                <div className={`pt-4 pb-4 pr-8 ${style.card_wrapper}`} key={key.id}>
                    <div className={style.card_info}>
                        <DragIcon type="primary" />
                        <img className='' src={item.image_mobile} alt="avatar" />
                        <p className={`text text_type_main-default ${style.item_name}`}>{item.name}</p>   
                        <div className={style.card_price}>
                            <p className="text text_type_digits-default">{item.price}</p>
                            <CurrencyIcon type="primary" />
                        </div>
                        
                        <LockIcon type="secondary" />
                    </div>
                </div>
            ))}
            
           
            
        </>
    );
};

export default ShortCard;