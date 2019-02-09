
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat'

import * as actions from '../actions/userActions';
import * as tokenActions from '../actions/tokenActions';
import * as productActions from '../actions/productActions';

export const authenticateUser = (action$, store, { http }) => {
    return action$.ofType(actions.USER_LOGIN_START)
        .switchMap((action) => {
            const body = {
                username: action.payload.username,
                password: action.payload.password
            };

            return http.post('http://35.188.28.177/api/login', body)
                .switchMap(({ response }) => {
                    return Observable.concat(
                        Observable.of(tokenActions.addTokenToStateAction(response.token)),
                        Observable.of(actions.addUserInfoToStateAction(response.userData)),
                        Observable.of(productActions.loadProductsAction())
                    );
                })
                .catch((error) => {
                    return Observable.of(actions.loginFailAction(error));
                });
        });
};