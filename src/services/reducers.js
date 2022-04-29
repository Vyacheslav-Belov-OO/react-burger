import {FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED} from './actions.js'

export const initialState = {

    ingridients: [],
    order: null,
    currentBurgerIngredients: [],
    currentIngredient: [],   
    dataRequest: false,
    dataFailed: false,

}

export const getIngridientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:{
            return {
                ...state,
            }
        }
        case FETCH_DATA_SUCCESS: {
            return {
                ...state,
                ingridients: action.ingridients,

            }
        }
        case FETCH_DATA_FAILED: {
            return {
                ...state,

            }
        }       
           
    
        default: {
            return state;
        }
            
    }

}