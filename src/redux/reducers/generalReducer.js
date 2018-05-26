
import * as actions from '../actions/generalActions';

const initialState = {
    snackMessageVisible: false,
    snackMessage: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.SHOW_SNACK_MESSAGE: {
            return Object.assign({}, state, {
                snackMessageVisible: true,
                snackMessage: action.payload.message
            });
        }

        case actions.HIDE_SNACK_MESSAGE: {
            return Object.assign({}, state, {
                snackMessage: '',
                snackMessageVisible: false
            });
        }

        default:
            return state;
    }
};