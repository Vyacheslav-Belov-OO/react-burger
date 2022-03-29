import React from 'react';
import style from './burger-constructor.module.css'
import {  CurrencyIcon, Button, ConstructorElement,DragIcon  } from '@ya.praktikum/react-developer-burger-ui-components';
import data from '../../static/data.json';

const BurgerConstructor= () => {

    const cardData=data;
    const bread=cardData[0];
    const all=cardData.slice(1, 30);
    

    return (
        <div className={`${style.burger_constructor}`}>
            <div className={`${style.constructor_container} mt-25 `}>
                <div className={`ml-10 mr-5 ${style.constructor_wrapper}`}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={bread.price}
                        thumbnail={bread.image_mobile}
                        className="constructor-element"
                    />
                </div>
                <div className={style.constructor_list}>
                    {all.map((item, key)=>(     
                        <div className={style.constructor_list_wrapper} key={item._id}>
                            <div className="mr-2" style={{ cursor: "pointer" }}>
                                <DragIcon type="primary" />
                            </div>          
                            <div className={`pt-4 pb-4 ${style.constructor_wrapper}`}>
                                <ConstructorElement
                                key={item._id}
                                text={item.name}
                                price={item.price}
                                thumbnail={item.image_mobile}
                                />                   
                                
                            </div>
                        </div> 
                    ))}
                </div>
                <div className={`ml-10 mr-5 ${style.constructor_wrapper}`}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={bread.price}
                        thumbnail={bread.image_mobile}
                    />
                </div>
            </div>           
            

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