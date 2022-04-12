import React from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientList from '../ingredient-list/ingredient-list';
import PropTypes from 'prop-types';
import menuItemPropTypes from '../../utils/constants'





const BurgerIngredients = ({data, active, setActive, setItem, setModalDetail}) => {
  
   
    const [current, setCurrent] = React.useState('one');
    return (
        <div className={styles.burger_ingredients}>
            <p className="text text_type_main-large mt-10 mb-5">
                Соберите бургер
            </p>
            <div className={styles.tab_wrapper}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
           
            <div className={styles.card_wrapper}>
                {data &&
                   <IngredientList data={data.filter(item => item.type == 'bun')} header="Булки" active={active} setActive={setActive}  setItem={setItem} setModalDetail={setModalDetail}/>
                   
                }
                {data &&
                   <IngredientList data={data.filter(item => item.type == 'sauce')} header="Соусы" active={active} setActive={setActive}  setItem={setItem} setModalDetail={setModalDetail}/>
                   
                }
                {data &&
                   <IngredientList data={data.filter(item => item.type == 'main')} header="Начинки" active={active} setActive={setActive}  setItem={setItem} setModalDetail={setModalDetail}/>
                   
                }
                
              
            </div>
        </div>
    );
};

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(menuItemPropTypes.isRequired).isRequired,
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,    
    setItem: PropTypes.func.isRequired,
    setModalDetail: PropTypes.func.isRequired

}

export default BurgerIngredients;