import React from 'react';
import style from './burger-constructor.module.css'
import {  CurrencyIcon, Button, ConstructorElement,DragIcon  } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';


const BurgerConstructor= ({data, setActive, setModal}) => {   
    
        const onClickHandler = () => {
            setActive(true)
            setModal(true)
        }
    

    return (
        <div className={`${style.burger_constructor}`}>
            <div className={`${style.constructor_container} mt-25 `}>
                <div className={`ml-10 mr-5 ${style.constructor_wrapper}`}>

                    {data &&
                        <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={data[0].price}
                        thumbnail={data[0].image_mobile}
                        className="constructor-element"
                    />
                    }
                    
                </div>
                {data &&
                    <div className={style.constructor_list}>
                        {data.slice(1, 30).map((item, key)=>(     
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
                }
                
                {data &&
                    <div className={`ml-10 mr-5 ${style.constructor_wrapper}`}>
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text="Краторная булка N-200i (низ)"
                            price={data[0].price}
                            thumbnail={data[0].image_mobile}
                        />
                    </div>
                }
            </div>           
            

            <div className={`pt-10 ${style.order_block}`}>
                <div className={`mr-10 ${style.order_block_price}`}>
                    <p className={`text text_type_digits-medium ${style.order_price}`}>610</p>
                    <CurrencyIcon type="primary" />
                </div>
                    
                <Button type="primary" size="large" onClick={onClickHandler}>Оформить заказ</Button>
            </div>
           
            
        </div>
    );
};
BurgerConstructor.propTypes= {
    data: PropTypes.array,
    setActive: PropTypes.func.isRequired,
    setModal: PropTypes.func.isRequired  
}

export default BurgerConstructor
;