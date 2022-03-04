import React from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import data from './../../static/data.json';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

let bun = data.filter(item => item.type == 'bun');
console.log(bun);




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
            <p className="text text_type_main-medium  mt-10">
                Булки
            </p>
            <div className='card_wrapper'>
               <div className='card'>
               <img className="Avatar" src={bun[0].image} alt="avatar" />
                  <p>{bun[0].price}</p>
                  <CurrencyIcon type="primary" />
                  <p>{bun[0].name}</p>
               </div>
            </div>
        </div>
    );
};

export default BurgerIngredients;