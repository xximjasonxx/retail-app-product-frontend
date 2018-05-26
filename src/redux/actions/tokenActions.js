
export const ADD_TOKEN_TO_STATE = 'ADD_TOKEN_TO_STATE';
export const TOKEN_VALIDATE_FAIL = 'TOKEN_VALIDATE_FAIL';

export const addTokenToStateAction = (token) => {
    return {
        type: ADD_TOKEN_TO_STATE,
        payload: token
    };
};

export const tokenValidateFailAction = (error) => {
    return {
        type: TOKEN_VALIDATE_FAIL,
        payload: error
    };
};