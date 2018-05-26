
import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';

import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat'

import * as actions from '../actions/productActions';
import * as generalActions from '../actions/generalActions';

export const createProduct = (action$, store, { http }) => {
    return action$.ofType(actions.CREATE_PRODUCT_START)
        .switchMap((action) => {
            const headers = {
                'Authorization': store.getState().tokenReducer.token
            };

            delete action.payload.productData.productId;
            return http.post('http://localhost:8080/api/product', action.payload.productData, headers)
                .switchMap(({ response }) => {
                    return Observable.concat(
                        Observable.of(actions.saveProductSuccessAction(response)),
                        Observable.of(generalActions.showSnackMessageAction("Product Created")),
                        Observable.of(push("/"))
                    );
                })
                .catch((error) => {
                    return Observable.of(actions.saveProductFailedAction(error));
                });
        });
};

export const updateProduct = (action$, store, { http }) => {
    return action$.ofType(actions.UPDATE_PRODUCT_START)
        .switchMap((action) => {
            const productId = action.payload.productId;
            const headers = {
                'Authorization': store.getState().tokenReducer.token
            };

            return http.put(`http://localhost:8080/api/product/${productId}`, action.payload, headers)
                .switchMap(() => {
                    return Observable.concat(
                        Observable.of(actions.saveProductSuccessAction(action.payload)),
                        Observable.of(generalActions.showSnackMessageAction("Product Updated")),
                        Observable.of(push("/"))
                    );
                })
                .catch((error) => {
                    return Observable.of(actions.saveProductFailedAction(error));
                })
        });
};

export const deleteProduct = (action$, store, { http }) => {
    return action$.ofType(actions.DELETE_PRODUCT_START)
        .switchMap((action) => {
            const productId = action.payload;
            const headers = {
                'Authorization': store.getState().tokenReducer.token
            };

            return http.del(`http://localhost:8080/api/product/${productId}`, headers)
                .switchMap(() => {
                    return Observable.concat(
                        Observable.of(actions.deleteProductSuccess(action.payload)),
                        Observable.of(generalActions.showSnackMessageAction("Product Deleted"))
                    );
                })
                .catch((error) => {
                    return Observable.of(actions.deleteProductFail(error));
                })
        })
}

export const loadProducts = (action$, store, { http }) => {
    return action$.ofType(actions.LOAD_PRODUCTS_START)
        .switchMap(() => {
            return http.get('http://localhost:8080/api/products')
                .switchMap(({ response }) => {
                    return Observable.of(actions.loadProductsSuccessAction(response));
                })
                .catch((error) => {
                    return Observable.of(actions.loadProductsFailAction(error));
                })
        })
};