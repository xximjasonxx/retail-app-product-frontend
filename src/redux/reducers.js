
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';
import generalReducer from './reducers/generalReducer';
import tokenReducer from './reducers/tokenReducer';

const rootReducer = combineReducers({
    productReducer,
    userReducer,
    generalReducer,
    tokenReducer,
    router: routerReducer
});

export default rootReducer;