
import { combineEpics } from 'redux-observable';

import * as userEpics from './epics/UserEpics';
import * as productEpics from './epics/ProductEpics';
import * as tokenEpics from './epics/TokenEpics';
import * as http from './ajax';

const rootEpic = (...args) => {
    return combineEpics(
        userEpics.authenticateUser,
        tokenEpics.validateToken,
        productEpics.createProduct,
        productEpics.loadProducts,
        productEpics.updateProduct,
        productEpics.deleteProduct
    )(...args, { http });
};

export default rootEpic;