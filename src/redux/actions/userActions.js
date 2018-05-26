
export const ADD_USERINFO_TO_STATE = 'ADD_USERINFO_TO_STATE';

export const addUserInfoToStateAction = (userInfo) => {
    return {
        type: ADD_USERINFO_TO_STATE,
        payload: userInfo
    };
};

export const USER_LOGIN_START = 'USER_LOGIN_START';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

export const loginStartAction = (username, password) => {
    return {
        type: USER_LOGIN_START,
        payload: {
            username,
            password
        }
    };
};

export const loginFailAction = (error) => {
    return {
        type: USER_LOGIN_FAIL,
        payload: error
    };
};