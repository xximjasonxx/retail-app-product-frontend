
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage-map';

import { routerMiddleware } from 'react-router-redux';

import rootReducer from './reducers';
import rootEpic from './epics';
import history from '../configureHistory';
import * as tokenActions from './actions/tokenActions';

export default function configureStore() {
    const storageReducer = storage.reducer(rootReducer);
    const engine = createEngine({
        'token': [ 'tokenReducer' ]
    });
    const storageMiddleware = storage.createMiddleware(engine, [], [ tokenActions.ADD_TOKEN_TO_STATE ]);
    const epicMiddlware = createEpicMiddleware(rootEpic);

    const store = createStore(
        storageReducer,
        undefined,      // use the initial state provided by the reducers themselves
        compose(
            applyMiddleware(
                epicMiddlware,
                routerMiddleware(history),
                storageMiddleware
            ),
        ),
    );

    // preload with any outstanding data
    const storageLoad = storage.createLoader(engine);
    storageLoad(store);

    return store;
}