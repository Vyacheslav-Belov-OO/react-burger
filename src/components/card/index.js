import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import style from './card.module.css';

const Card = ( {data, header, ...props} ) => {
    const card_data=data;    
    
    return (
        <div className={`mb-10 ${style.card_main}`}>
            <p className="text text_type_main-medium mt-10 mb-6">{header}</p>
            <div className={`pl ${style.card}`}>                
                {card_data.map((item, key)=>(
                    <div className={style.card_content} key={key.id}>
                        <img className={`mb-1 ${style.avatar}`} src={item.image} alt="avatar" />                        
                        <div className={`mb-1 ${style.price}`}>
                            <p className="text text_type_digits-default mr-2">{item.price}</p>
                            <CurrencyIcon type="primary" />
                        </div>     
                        <p className={`text text_type_main-default ${style.name}`}>{item.name}</p>                
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;