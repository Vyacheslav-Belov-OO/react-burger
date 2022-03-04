import React from 'react';
import AppHeader from './components/app-header';
import Conteiner from './components/conteiner';
import BurgerIngredients from './components/burger-ingredients';
import styles from './App.module.css';
import BurgerConstructor from './components/burger-constructor'
import data from './static/data.json';


console.log(data[0].type);

let bun = data.filter(item => item.type == 'bun');
console.log(bun);





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
