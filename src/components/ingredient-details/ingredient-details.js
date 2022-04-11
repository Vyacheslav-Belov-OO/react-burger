import React from 'react';
import styles from './ingredient-details.module.css'
import PropTypes from 'prop-types';
const IngredientDetails = ({data}) => {
    
   
    
    return (
      
        <>
            
            <div className={styles.title}>
                <p className="text text_type_main-large">
                    Детали ингредиента
                </p>
            </div>
            {data && 
                <div className={styles.img}>
                    <img className="fit-picture" src={data[0][`image_large`]}></img>
                </div>
            }    
            
                <div className={styles.name}>
                    <p className="text text_type_main-medium">
                    {data[0][`name`]}
                    </p>
                </div>
            
            
            <div className={styles.ingredient_details_wrapper}>
                {data &&
                    <div className={styles.ingredient_details}>
                        <p className="text text_type_main-default">
                            Калории,ккал
                        </p>
                        <p className="text text_type_digits-default">{data[0][`calories`]}</p>

                    </div>
                }
                {data &&
                    <div className={styles.ingredient_details}>
                        <p className="text text_type_main-default">  
                            Белки, г
                        </p>
                        <p className="text text_type_digits-default">{data[0][`proteins`]}</p>

                    </div>
                }
                {data &&
                    <div className={styles.ingredient_details}>
                        <p className="text text_type_main-default">
                            Жиры, г
                        </p>
                        <p className="text text_type_digits-default">{data[0][`fat`]}</p>

                    </div>
                }
                {data &&
                    <div className={styles.ingredient_details}>
                        <p className="text text_type_main-default">
                            Углеводы, г
                        </p>
                        <p className="text text_type_digits-default">{data[0][`carbohydrates`]}</p>

                    </div>
                }
                
                
            </div>
            
        </>
    );
};
IngredientDetails.propTypes = {
    data: PropTypes.array.isRequired

}

export default IngredientDetails;