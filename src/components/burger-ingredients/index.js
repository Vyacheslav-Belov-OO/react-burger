import React from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import data from './../../static/data.json';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import Card from './../card';

let bun = data.filter(item => item.type == 'bun');
let sauce = data.filter(item => item.type == 'sauce');
let main = data.filter(item => item.type == 'main');





const BurgerIngredients = () => {
    const [current, setCurrent] = React.useState('one');
    return (
        <div className={styles.burger_ingredients}>
            <p className="text text_type_main-large mt-10 mb-5">
                Соберите бургер
            </p>
            <div style={{ display: 'flex' }}>
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
                <Card data={bun} header="Булки" />
                <Card data={sauce} header="Соусы"/> 
                <Card data={main} header="Начинки"/>             
              
            </div>
        </div>
    );
};

export default BurgerIngredients;