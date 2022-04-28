import {GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAILED} from './actions.js'

export const initialState = {

    ingredients: [],
    order: null,
    currentBurgerIngredients: [],
    currentIngredient: [],   
    dataRequest: false,
    dataFailed: false,

}

export const getIngridientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:{
            return {
                ...state,
            }
        }
        case GET_DATA_SUCCESS: {
            return {
                ...state,
                data: action.data,

            }
        }
        case GET_DATA_FAILED: {
            return {
                ...state,

            }
        }       
           
    
        default: {
            return state;
        }
            
    }

}