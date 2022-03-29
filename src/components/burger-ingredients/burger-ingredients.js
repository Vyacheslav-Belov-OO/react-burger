import React from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import data from '../../static/data.json';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientList from '../ingredient-list/ingredient-list';

const bun = data.filter(item => item.type == 'bun');
const sauce = data.filter(item => item.type == 'sauce');
const main = data.filter(item => item.type == 'main');





const BurgerIngredients = () => {
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
                <IngredientList data={bun} header="Булки" />
                <IngredientList data={sauce} header="Соусы"/> 
                <IngredientList data={main} header="Начинки"/>             
              
            </div>
        </div>
    );
};

export default BurgerIngredients;