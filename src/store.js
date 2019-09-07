import { createStore, combineReducers, applyMiddleware } from 'redux';
import { addToCartReducer } from './reducers/addToCartReducer';
import { AllProductsReducer } from './reducers/allProductsReducer';
import { Counter } from './reducers/counter.reducer';
import thunk from 'redux-thunk';
// Redux dev tools
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

const rootReducers = combineReducers({
    cart: addToCartReducer,
    allProducts: AllProductsReducer,
    count:Counter,

});

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;