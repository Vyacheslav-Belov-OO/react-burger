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
  

  const [state, setState] = React.useState({data: null,});
  const [modalActive, setModalActive] = React.useState(false);
  const [modalOrder, setModalOrder] = React.useState(false);  
  const [itemID, setItemId] = React.useState('')

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData())
  },[dispatch])

  const data = useSelector((state) => state.ingridients.ingridients);

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(apiUrl);
  //       if (!response.ok) {
  //         throw new Error('Ответ сети был не ok.');
  //       }
  //       const resJson = await response.json();
  //       setState({ data: resJson.data });
  //     }
  //     catch (e) {
  //       console.log(e)
  //     }
  //   };
  //   fetchData();
    
  // }, []);

//   const onClose = () =>{
//     setModalActive(false)
//     setModalOrder(false)
//     setModalDetail(false)
// };

  const onOpenBurgerModal = () =>{   
    setModalActive(true)
    setModalOrder(true)  
  }
  
  return (
    <div>
      < header className={styles.app_header}>    
          <AppHeader /> 
      </header>
      <main className={styles.main}>
        {data &&
        <>
          <BurgerIngredients data={data} active={modalActive} setActive={setModalActive} setItem={setItemId} />
          <BurgerConstructor data={data} setActive={onOpenBurgerModal}/>
        </>          
        }         
          
          
          {modalOrder &&
            <Modal active={modalActive} >
              <OrderDetails/>
          </Modal>
          }
          
            <Modal active={modalActive} >

              {data &&
                <IngredientDetails data={data.find(item => item._id == itemID)} />
              }
              
            </Modal>
          
          
            
                    
          
        
            
      </main>
    </div>
  );
}

export default App;
