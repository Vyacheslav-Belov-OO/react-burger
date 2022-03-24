import React from 'react';
import { DragIcon, CurrencyIcon, LockIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './short-card.module.css';
import data from './../../static/data.json';

const ShortCard = () => {

    const card_data=data;
    console.log(card_data);

    return (
        <>
            <div className={style.single_card}>
                <div className={`pt-4 pb-4 ${style.card_wrapper}`} >
                        <div className='mr-6'>
                            <DragIcon type="primary" />
                        </div>

                        <div className={`${style.card_block}`}>
                            <div className={`${style.card_info}`}>                              
                                <div className={style.card_1block}>
                                    <img className={style.card_img} src={card_data[0].image_mobile} alt="avatar" />
                                    <div className={`text text_type_main-default ${style.item_name}`}>{card_data[0].name}</div>                            
                                </div>   
                                <div className={style.card_2block}>
                                    <div className={`${style.card_price}`}>
                                        <p className="text text_type_digits-default mr-2">{card_data[0].price}</p>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                        <div className={style.card_icon}>
                                        <LockIcon type="secondary" />
                                    </div>
                                </div>  
                            </div>
                        </div>                    
                        
                </div>
            </div>
            
            <div className={style.card}>
                {card_data.map((item, key)=>(                
                    <div className={`pt-4 pb-4 ${style.card_wrapper}`} key={key.id}>
                        <div className='mr-6'>
                            <DragIcon type="primary" />
                        </div>

                        <div className={`${style.card_block}`}>
                            <div className={`${style.card_info}`}>                              
                                <div className={style.card_1block}>
                                    <img className={style.card_img} src={item.image_mobile} alt="avatar" />
                                    <div className={`text text_type_main-default ${style.item_name}`}>{item.name}</div>                            
                                </div>   
                                <div className={style.card_2block}>
                                    <div className={`${style.card_price}`}>
                                        <p className="text text_type_digits-default mr-2">{item.price}</p>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                        <div className={style.card_icon}>
                                        <LockIcon type="secondary" />
                                    </div>
                                </div>  
                            </div>
                        </div>                    
                        
                    </div>
                ))}
            </div>
            <div className={style.single_card}>
                <div className={`pt-4 pb-4 ${style.card_wrapper}`} >
                        <div className='mr-6'>
                            <DragIcon type="primary" />
                        </div>

                        <div className={`${style.card_block}`}>
                            <div className={`${style.card_info}`}>                              
                                <div className={style.card_1block}>
                                    <img className={style.card_img} src={card_data[0].image_mobile} alt="avatar" />
                                    <div className={`text text_type_main-default ${style.item_name}`}>{card_data[0].name}</div>                            
                                </div>   
                                <div className={style.card_2block}>
                                    <div className={`${style.card_price}`}>
                                        <p className="text text_type_digits-default mr-2">{card_data[0].price}</p>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                        <div className={style.card_icon}>
                                        <LockIcon type="secondary" />
                                    </div>
                                </div>  
                            </div>
                        </div>                    
                        
                </div>
            </div>
            
           
            
        </>
    );
};

export default ShortCard;