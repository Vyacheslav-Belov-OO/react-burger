import React from 'react';
import styles from './ingredient-details.module.css'

const IngredientDetails = ({data, id}) => {
    // {data &&
    //     const itemId = data.filter(item => item._id == id)
    //     console.log(itemId);
    // }
    // const itemId = data.filter(item => item._id == id)
    console.log(data);
    return (
      
        <>
            
            <div className={styles.title}>
                <p className="text text_type_main-large">
                    Детали ингредиента
                </p>
            </div>
            {data &&
                <div>
                    <img className="fit-picture" src={data.filter(item => item._id == id)}></img>
                </div>
            }    
            {data &&
                <div className={styles.name}>
                    <p className="text text_type_main-medium">
                    {data.name}
                    </p>
                </div>
            }
            
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

export default IngredientDetails;