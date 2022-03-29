import React from 'react';
import styles from './conteiner.module.css'

const Conteiner = (props) => {
    return (
        <div className={ styles.conteiner }>
            {props.children}
        </div>
    );
};

export default Conteiner;