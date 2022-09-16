import React from 'react';
import styles from './ingredient-details.module.css'
import PropTypes from 'prop-types';
import menuItemPropTypes from '../../utils/constants'

const IngredientDetails = ({ data}) => {
    
  
    console.log(data);
    return (
      
        <>
            
            <div className={styles.title}>
                <p className="text text_type_main-large">
                    Детали ингредиента
                </p>
            </div>
            {data && 
                <div className={styles.img}>
                    <img className="fit-picture" src={data.image_large}></img>
                </div>
            }    
            
                <div className={styles.name}>
                    <p className="text text_type_main-medium">
                    {data.name}
                    </p>
                </div>
            
            
            <div className={styles.ingredient_details_wrapper}>
                {data &&
                    <div className={styles.ingredient_details}>
                        <p className="text text_type_main-default">
                            Калории,ккал
                        </p>
                        <p className="text text_type_digits-default">{data.calories}</p>

                    </div>
                }
                {data &&
                    <div className={styles.ingredient_details}>
                        <p className="text text_type_main-default">  
                            Белки, г
                        </p>
                        <p className="text text_type_digits-default">{data.proteins}</p>

                    </div>
                }
                {data &&
                    <div className={styles.ingredient_details}>
                        <p className="text text_type_main-default">
                            Жиры, г
                        </p>
                        <p className="text text_type_digits-default">{data.fat}</p>

                    </div>
                }
                {data &&
                    <div className={styles.ingredient_details}>
                        <p className="text text_type_main-default">
                            Углеводы, г
                        </p>
                        <p className="text text_type_digits-default">{data.carbohydrates}</p>

                    </div>
                }
                
                
            </div>
            
        </>
    );
};
IngredientDetails.propTypes = {
    data: menuItemPropTypes.isRequired,
  

}

export default IngredientDetails;