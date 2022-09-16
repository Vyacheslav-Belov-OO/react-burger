import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import styles from './app.module.css';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { DataContext } from '../../services/context';
import reducer from '../../services/reducer';

import { baseUrl } from "../utils/constants";


function App() {  
  
  const [modalActive, setModalActive] = React.useState(false);
  const [modalOrder, setModalOrder] = React.useState(false);
  const [modalDetail, setModalDetail] = React.useState(false);
  const [itemID, setItemId] = React.useState('')

  const [state, dispatch] = React.useReducer(reducer, {data:null, cunstructor:null, sum:0, order_number: null});

  
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl + "/ingredients");
        if (!response.ok) {
          throw new Error('Ответ сети был не ok.');
        }
        const resJson = await response.json();
        dispatch({type:'fetch', payload: resJson.data}); 

        const orderRequest = resJson.data.map(function (item) {
          return  item._id    
        });               
        dispatch({type:'burger_constractor', payload: orderRequest});
      }
      catch (e) {
        console.log(e)
      }
    };
    fetchData();  
    
    
    
  }, []);


  const sendOrderRequest =  () => {
    fetch(baseUrl + "/orders",{
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({ "ingredients": state.cunstructor}),
    })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      dispatch({
        type: 'get_order_number',
        payload: json.order.number,
      });      
      console.log(json.order.number); 
    })
    
  };

  

  const onClose = () =>{
    setModalActive(false)
    setModalOrder(false)
    setModalDetail(false)
};

  const onOpenBurgerModal = () =>{   
    setModalActive(true)
    setModalOrder(true)  
  }
 
  
  return (
    <DataContext.Provider value={state.data}>
      <div>
        < header className={styles.app_header}>    
            <AppHeader /> 
        </header>
        <main className={styles.main}>
          {state.data &&
          <>
            <BurgerIngredients data={state.data} active={modalActive} setActive={setModalActive} setItem={setItemId} setModalDetail={setModalDetail}/>
            <BurgerConstructor  setActive={onOpenBurgerModal} sendOrderRequest={sendOrderRequest}/>
          </>          
          }         
            
            
            {modalOrder &&
              <Modal active={modalActive} onClose={onClose} >
                <OrderDetails order_number={state.order_number}/>
            </Modal>
            }
            {modalDetail &&
              <Modal active={modalActive} onClose={onClose} >

                {state.data &&
                  <IngredientDetails data={state.data.find(item => item._id == itemID)} />
                }
                
              </Modal>
            }
        </main>
      </div>
    </DataContext.Provider>
  );
}

export default App;
