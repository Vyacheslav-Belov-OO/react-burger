import React from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientList from '../ingredient-list/ingredient-list';





const BurgerIngredients = ({data, active, setActive, item, setItem}) => {
  
    
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
                   <IngredientList data={data.filter(item => item.type == 'bun')} header="Булки" active={active} setActive={setActive} item={item} setItem={setItem}/>
                   
                }
                {data &&
                   <IngredientList data={data.filter(item => item.type == 'sauce')} header="Соусы" active={active} setActive={setActive}/>
                   
                }
                {data &&
                   <IngredientList data={data.filter(item => item.type == 'main')} header="Начинки" active={active} setActive={setActive}/>
                   
                }
                
              
            </div>
        </div>
    );
};

export default BurgerIngredients;