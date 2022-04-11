import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import styles from './app.module.css';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';


function App() {
  const url = "https://norma.nomoreparties.space/api/ingredients";

  const [state, setState] = React.useState({data: null,});
  const [modalActive, setModalActive] = React.useState(false);
  const [modalOrder, setModalOrder] = React.useState(false);
  const [modalDetail, setModalDetail] = React.useState(false);
  const [itemID, setItemId] = React.useState('60d3b41abdacab0026a733c6')


  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Ответ сети был не ok.');
        }
        const resJson = await response.json();
        setState({ data: resJson.data });
      }
      catch (e) {
        console.log(e)
      }
    };
    fetchData();
    
  }, []);

  const onClose = () =>{
    setModalActive(false)
    setModalOrder(false)
    setModalDetail(false)
};
  
  return (
    <div>
      < header className={styles.app_header}>    
          <AppHeader /> 
      </header>
      <main className={styles.main}>         
          <BurgerIngredients data={state.data} active={modalActive} setActive={setModalActive} item={itemID} setItem={setItemId} setModalDetail={setModalDetail}/>
          <BurgerConstructor data={state.data} setActive={setModalActive} setModal={setModalOrder}/>
          
          {modalOrder &&
            <Modal active={modalActive} onClose={onClose}>
              <OrderDetails/>
          </Modal>
          }
          {modalDetail &&
            <Modal active={modalActive} onClose={onClose}>

              {state.data &&
                <IngredientDetails data={state.data.filter(item => item._id == itemID)} />
              }
              
            </Modal>
          }
          
            
                    
          
        
            
      </main>
    </div>
  );
}

export default App;
