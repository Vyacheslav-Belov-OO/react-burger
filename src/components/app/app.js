import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import styles from './app.module.css';
import BurgerConstructor from '../burger-constructor/burger-constructor';




function App() {
  return (
    <div>
      < header className={styles.app_header}>    
          <AppHeader /> 
      </header>
      <main className={styles.main}>
        
          <BurgerIngredients />
          <BurgerConstructor />
        
            
      </main>
    </div>
  );
}

export default App;
