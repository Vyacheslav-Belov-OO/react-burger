import React, { useReducer } from 'react';
import style from './burger-constructor.module.css'
import {  CurrencyIcon, Button, ConstructorElement,DragIcon  } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import menuItemPropTypes from '../../utils/constants'
import { DataContext } from '../../services/context';



const BurgerConstructor= ({setActive, sendOrderRequest}) => {  

    const data = React.useContext(DataContext) 
    const bunArr = data.filter(item => item.type == 'bun')
    const bun = bunArr[Math.floor(Math.random() * bunArr.length)];
    const ingredients= data.filter(item => item.type !=='bun')

    


    
  
    let sum = bun.price*2 ;

    const total = ingredients.map(function (item) {
      if (item.__v == 0) {
        return sum + parseInt(item.price, 10) * 1 ;
      } else {
        return 0;
      }
    });
    const result = total.reduce(function (sum, elem) {
        return sum + elem;
      }, 0);

      

      
     
   
    
    return (
        <div className={`${style.burger_constructor}`}>
            <div className={`${style.constructor_container} mt-25 `}>
                <div className={`ml-10 mr-5 ${style.constructor_wrapper}`}>

                    {data &&
                        <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={bun.name}
                        price={bun.price}
                        thumbnail={bun.image_mobile}
                        className="constructor-element"
                    />
                    }
                    
                </div>
                {data &&
                    <div className={style.constructor_list}>
                        {ingredients.map((item, key)=>(     
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
                            text={bun.name}
                            price={bun.price}
                            thumbnail={bun.image_mobile}
                        />
                    </div>
                }
            </div>           
            

            <div className={`pt-10 ${style.order_block}`}>
                <div className={`mr-10 ${style.order_block_price}`}>
                    <p className={`text text_type_digits-medium ${style.order_price}`}> {result ? result : "0"}</p>
                    <CurrencyIcon type="primary" />
                </div>
                    
                <Button type="primary" size="large" onClick={()=> {setActive(); sendOrderRequest()}}>Оформить заказ</Button>
            </div>
           
            
        </div>
    );
};
BurgerConstructor.propTypes= {

    data: PropTypes.arrayOf(menuItemPropTypes.isRequired).isRequired,
    setActive: PropTypes.func.isRequired,
}

export default BurgerConstructor
;