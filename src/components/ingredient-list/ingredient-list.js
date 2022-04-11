import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import style from './ingredient-list.module.css';
import PropTypes from 'prop-types';

const IngredientList = ( {data, header, setActive, setItem, setModalDetail} ) => {
    
  
    
    
    return (
        <div className={`mb-10 ${style.card_main}`}>
            <p className="text text_type_main-medium mt-10 mb-6">{header}</p>
            <div className={`pl ${style.card}`}>                
                {data.map((item, key)=>(
                    <div className={style.card_content} key={item._id} onClick={()=>{setItem(item._id); setActive(true); setModalDetail(true)}} id={item._id}>
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
IngredientList.propTypes = {
    data: PropTypes.array.isRequired, 
    header: PropTypes.string.isRequired, 
    setActive: PropTypes.func.isRequired, 
    setItem: PropTypes.func.isRequired, 
    setModalDetail: PropTypes.func.isRequired
    
}

export default IngredientList;