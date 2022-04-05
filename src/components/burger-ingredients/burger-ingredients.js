import React from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientList from '../ingredient-list/ingredient-list';





const BurgerIngredients = ({...props}) => {
  

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
                {props.data &&
                   <IngredientList data={props.data.filter(item => item.type == 'bun')} header="Булки" />
                   
                }
                {props.data &&
                   <IngredientList data={props.data.filter(item => item.type == 'sauce')} header="Соусы" />
                   
                }
                {props.data &&
                   <IngredientList data={props.data.filter(item => item.type == 'main')} header="Начинки" />
                   
                }
                
              
            </div>
        </div>
    );
};

export default BurgerIngredients;