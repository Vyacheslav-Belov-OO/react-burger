import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import styles from './app.module.css';
import BurgerConstructor from '../burger-constructor/burger-constructor';


function App() {
  const url = "https://norma.nomoreparties.space/api/ingredients";

  const [state, setState] = React.useState({data: null,});

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
          <BurgerIngredients data={state.data}/>
          <BurgerConstructor data={state.data}/>
        
            
      </main>
    </div>
  );
}

export default App;
