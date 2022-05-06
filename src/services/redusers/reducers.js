import {FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED} from '../actions/actions.js'
import { combineReducers } from "redux";
import { getModalReducer } from './modal';

export const initialState = {

    ingridients: [],
    burgerConstructorList: [],
    currentIngredient: [],
    order: null,    
      
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
                ingridients: action.payload,

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

// export const getIngredientReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case MODAL_INGRIDIENT:{
//             return {
//                 ...state,
//                 currentIngredient: action.payload,
//             }
//         }          
    
//         default: {
//             return state;
//         }
            
//     }
// }



export const rootReducer = combineReducers({
    ingridients: getIngridientsReducer,
    modal: getModalReducer,
   
  });