import { applyMiddleware, combineReducers, createStore } from 'redux';

import AuthReducer from './reducers/auth.reducer';
import cartReducer from './reducers/cart.reducer';
import categoryReducer from './reducers/category.reducer';
import orderReducer from './reducers/order.reducer';
import productsReducer from './reducers/products.reducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
    category: categoryReducer,
    product: productsReducer,
    cart: cartReducer,
    order: orderReducer,
    auth: AuthReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));