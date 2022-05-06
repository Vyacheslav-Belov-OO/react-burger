import {OPEN_MODAL, CLOSE_MODAL} from '../actions/modal'


export const defaultState = {
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
            
        
    
        default: {
            return state;
        }
            
    }
}