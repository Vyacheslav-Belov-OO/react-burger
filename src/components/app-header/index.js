import React from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css';
import Conteiner from '../conteiner';

const AppHeader = () => {
    return (
        <Conteiner>
            <nav className={ styles.nav }>
                <div className={ styles.first }>
                    <div className={styles.constract}>
                        <BurgerIcon type="primary" className={styles.burger}/>
                        <p className="text text_type_main-default ml-2">Конструктор</p>
                    </div>
                    <div className={styles.line_order}>
                        <ListIcon type="secondary" />
                        <p className="text text_type_main-default  ml-2">Лента заказов</p>
                    </div>                                      
                </div>            
                <Logo />
                <div className={styles.secod}>
                    <ProfileIcon type="secondary" />
                    <p className="text text_type_main-default  ml-2">Личный кабинет</p>
                </div>           
            
            </nav>
        </Conteiner>
        
    );
};

export default AppHeader;