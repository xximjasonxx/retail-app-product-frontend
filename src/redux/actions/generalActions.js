
export const SHOW_SNACK_MESSAGE = 'SHOW_SNACK_MESSAGE';
export const HIDE_SNACK_MESSAGE = 'HIDE_SNACK_MESSAGE';

export const showSnackMessageAction = (message) => {
    return {
        type: SHOW_SNACK_MESSAGE,
        payload: {
            message
        }
    };
};

export const hideSnackbarAction = () => {
    return { type: HIDE_SNACK_MESSAGE };
}

export const APP_LOADED = 'APP_LOADED';

export const appLoadedAction = () => {
    return { type: APP_LOADED };
};