import React, { useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import styles from './app.module.css';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import {apiUrl} from '../../utils/apiUrl'
import { useDispatch, useSelector } from 'react-redux';
import {getData} from '../../services/actions/actions'


function App() {
  
  const [modalActive, setModalActive] = React.useState(false); 
  const [itemID, setItemId] = React.useState('')

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData())
  },[dispatch])

  const data = useSelector((state) => state.ingridients.ingridients);
  const modalOrder = useSelector((state) => state.modal.orderModal );
  const ingridientOrder = useSelector((state) => state.modal.ingridientModal );

  return (
    <div>
      < header className={styles.app_header}>    
          <AppHeader /> 
      </header>
      <main className={styles.main}>
        {data &&
        <>
          <BurgerIngredients data={data} active={modalActive} setActive={setModalActive} setItem={setItemId} />
          <BurgerConstructor data={data}/>
        </>          
        }         
          
          
          {modalOrder &&
            <Modal >
              <OrderDetails/>
            </Modal>
          }
          {ingridientOrder &&
            <Modal>
              {data &&
                <IngredientDetails />
              }              
            </Modal>
          }
            
      </main>
    </div>
  );
}

export default App;
