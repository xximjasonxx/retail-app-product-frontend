
import * as actions from '../actions/userActions';
import * as tokenActions from '../actions/tokenActions';

const initialState = {
    token: '',
    currentUser: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_USERINFO_TO_STATE: {
            return Object.assign({}, state, {
                currentUser: action.payload
            });
        }

        case tokenActions.TOKEN_VALIDATE_FAIL: {
            return Object.assign({}, state, {
                currentUser: null
            });
        }

        default:
            return state;
    }
};