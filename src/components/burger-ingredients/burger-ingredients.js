import React, {useEffect, useRef} from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientList from '../ingredient-list/ingredient-list';
import PropTypes from 'prop-types';
import menuItemPropTypes from '../../utils/constants'
import {connect} from 'react-redux'
import { useDispatch, useSelector } from "react-redux";
import {getData} from '../../services/actions/actions'



 

const BurgerIngredients = ({ active, setActive, setItem, setModalDetail}) => {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getData());
    }, [dispatch])

    const data = useSelector((state) => state.ingridients.ingridients);  

    const [current, setCurrent] = React.useState('one');

    const domRef = useRef(null);
    const refs = [];
  
    // create and track refs for later use
    const newRef = (el) => {
      refs.push(el);
      return el;
    };
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          for (let entry of entries) {
            // if 90% of the section is visible
            if (entry.intersectionRatio && entry.isIntersecting) {
              // update the active state to the visible section
              setCurrent(entry.target.id);
            }
          }
        },
        {
          root: domRef.current,
          threshold: 0
        }
      );
      
      refs.forEach((ref) =>
        // observe the refs that were applied to the sections
        observer.observe(ref)
      );
  
  
      return () => {
        refs.forEach((ref) => ref && observer.unobserve(ref));
      };
    }, []);
    
    return (
        <div className={styles.burger_ingredients}>
            <p className="text text_type_main-large mt-10 mb-5">
                Соберите бургер
            </p>
            <div className={styles.tab_wrapper}>
                <Tab value="bulki" active={current === 'bulki'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="souse" active={current === 'souse'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="filling" active={current === 'filling'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
           
            <div className={styles.card_wrapper}>
                {data &&
                   <IngredientList id= "bulki" data={data.filter(item => item.type == 'bun')} header="Булки" active={active} setActive={setActive}  setItem={setItem} setModalDetail={setModalDetail}/>
                   
                }
                {data &&
                   <IngredientList id = "souse" data={data.filter(item => item.type == 'sauce')} header="Соусы" active={active} setActive={setActive}  setItem={setItem} setModalDetail={setModalDetail}/>
                   
                }
                {data &&
                   <IngredientList id = "filling" data={data.filter(item => item.type == 'main')} header="Начинки" active={active} setActive={setActive}  setItem={setItem} setModalDetail={setModalDetail}/>
                   
                }
                
              
            </div>
        </div>
    );
};

// BurgerIngredients.propTypes = {
//     data: PropTypes.arrayOf(menuItemPropTypes.isRequired).isRequired,
//     active: PropTypes.bool.isRequired,
//     setActive: PropTypes.func.isRequired,    
//     setItem: PropTypes.func.isRequired,
//     setModalDetail: PropTypes.func.isRequired

// }



export default connect() (BurgerIngredients)