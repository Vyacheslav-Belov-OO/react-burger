import {OPEN_MODAL, CLOSE_MODAL, ADD_CURRENT_ITEM, REMOVE_CURRENT_ITEM} from '../actions/modal'


export const defaultState = {
    isOpen: false,
    currentIngridient:{},
    ingridientModal:false,
    orderModal: false,

}

export const getModalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case OPEN_MODAL:{
            return {
                ...state,
                ...action,
            }
        }
        case CLOSE_MODAL: {
            return {
                ...state,
                ...action,
            }
        }
        case ADD_CURRENT_ITEM: {
            return {
                ...state, 
                currentIngridient:  { ...action.ingidient}
            }
        }
            
        
    
        default: {
            return state;
        }
            
    }
}