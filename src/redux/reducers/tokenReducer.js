
import * as tokenActions from '../actions/tokenActions';

const intitialState = {
    token: null
};

export default (state = intitialState, action) => {
    switch (action.type) {
        case tokenActions.ADD_TOKEN_TO_STATE: {
            return Object.assign({}, state, {
                token: action.payload
            });
        }

        case tokenActions.TOKEN_VALIDATE_FAIL: {
            return Object.assign({}, state, {
                token: null
            });
        }

        default:
            return state;
    }
}