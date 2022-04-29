import { combineReducers } from "redux";
import {getIngridientsReducer} from '../services/reducers'

export const rootReducer = combineReducers({
    ingridients: getIngridientsReducer,
   
  });