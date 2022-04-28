import thunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';
import { getIngridientsReducer } from './reducers';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(getIngridientsReducer, enhancer);