
import { Observable } from 'rxjs/Observable';
import { LOAD } from 'redux-storage';

import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat'

import * as tokenActions from '../actions/tokenActions';
import * as userActions from '../actions/userActions';
import * as productActions from '../actions/productActions';

export const validateToken = (action$, store, { http }) => {
    return action$.ofType(LOAD)
        .switchMap((action) => {
            if (!action.payload.tokenReducer) {
                return Observable.empty();
            }

            const storedToken = action.payload.tokenReducer.token;
            const headers = { 'Authorization': storedToken };

            return http.get('http://localhost:8081/api/validate', headers)
                .switchMap(({ response }) => {
                    return Observable.concat(
                        Observable.of(tokenActions.addTokenToStateAction(storedToken)),
                        Observable.of(userActions.addUserInfoToStateAction(response)),
                        Observable.of(productActions.loadProductsAction())
                    );
                })
                .catch((error) => {
                    return Observable.of(tokenActions.tokenValidateFailAction(error));
                });
        });
};