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
  const [modalDetail, setModalDetail] = React.useState(true);
  const [itemID, setItemId] = React.useState(
    { 
        "_id": ""          
    }
  )
  console.log(itemID);
  console.log(state.data);

  // console.log(state.data.filter(item => item._id == itemID))

  // const [dataIngredientDetails, setDataIngredientDetails] = React.useState({data: null})

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const resJson = await response.json();
        setState({ data: resJson.data });
      }
      catch (e) {
        console.log(e)
      }
    };
    fetchData();
    
  }, []);
  
  return (
    <div>
      < header className={styles.app_header}>    
          <AppHeader /> 
      </header>
      <main className={styles.main}>         
          <BurgerIngredients data={state.data} active={modalActive} setActive={setModalActive} item={itemID} setItem={setItemId}/>
          <BurgerConstructor data={state.data} setActive={setModalActive}/>
          
          {modalOrder &&
            <Modal active={modalActive} setActive={setModalActive}>
              <OrderDetails/>
          </Modal>
          }
          {modalDetail &&
            <Modal active={modalActive} setActive={setModalActive}>

              {state.data &&
                <IngredientDetails data={state.data.filter(item => item._id == itemID)} id={itemID}/>
              }
              
            </Modal>
          }
          
            
                    
          
        
            
      </main>
    </div>
  );
}

export default App;
