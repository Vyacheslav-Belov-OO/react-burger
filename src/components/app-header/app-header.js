import React from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css';
import Container from '../container/container';

const AppHeader = () => {
    return (
        <header>
            <Container>
                <nav className={`pb-1 pt-1 mt-10 ${styles.nav}`} >
                    <div className={ styles.first }>
                        <div className={`pb-4 pt-4 pl-5 pr-5 ${styles.constract}`}>
                            <BurgerIcon type="primary" className={styles.burger}/>
                            <p className="text text_type_main-default ml-2">Конструктор</p>
                        </div>
                        <div className={`pb-4 pt-4 pl-5 pr-5 ${styles.line_order}`}>
                            <ListIcon type="secondary" />
                            <p className="text text_type_main-default  ml-2">Лента заказов</p>
                        </div>                                      
                    </div>            
                    <Logo />
                    <div className={`pb-4 pt-4 pl-5 pr-5 ${styles.secod}`}>
                        <ProfileIcon type="secondary" />
                        <p className="text text_type_main-default  ml-2">Личный кабинет</p>
                    </div>                           
                </nav>
            </Container>
            
        </header>
        
        
    );
};

export default AppHeader;