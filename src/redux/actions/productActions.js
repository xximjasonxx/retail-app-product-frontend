
export const CREATE_PRODUCT_START = 'CREATE_PRODUCT_START';
export const UPDATE_PRODUCT_START = 'UPDATE_PRODUCT_START';
export const SAVE_PRODUCT_SUCCESS = 'SAVE_PRODUCT_SUCCESS';
export const SAVE_PRODUCT_FAILURE = 'SAVE_PRODUCT_FAILURE';

export const createProductAction = (productData) => {
    return {
        type: CREATE_PRODUCT_START,
        payload: {
            isEditing: false,
            productData
        }
    };
};

export const updateProductAction = (productData) => {
    return {
        type: UPDATE_PRODUCT_START,
        payload: productData
    };
};

export const saveProductSuccessAction = (product) => {
    return {
        type: SAVE_PRODUCT_SUCCESS,
        payload: product
    };
};

export const saveProductFailedAction = (error) => {
    return {
        type: SAVE_PRODUCT_FAILURE,
        payload: error
    };
};

export const LOAD_PRODUCTS_START = 'LOAD_PRODUCTS_START';
export const LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS';
export const LOAD_PRODUCTS_FAIL = 'LOAD_PRODUCTS_FAIL';

export const loadProductsAction = () => {
    return { type: LOAD_PRODUCTS_START };
}

export const loadProductsSuccessAction = (products) => {
    return {
        type: LOAD_PRODUCTS_SUCCESS,
        payload: products
    };
};

export const loadProductsFailAction = (error) => {
    return {
        type: LOAD_PRODUCTS_FAIL,
        payload: error
    };
};

export const DELETE_PRODUCT_START = 'DELETE_PRODUCT_START';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAIL = 'DELETE_PRODUCT_FAIL';

export const deleteProductAction = (productId) => {
    return {
        type: DELETE_PRODUCT_START,
        payload: productId
    };
};

export const deleteProductSuccess = (productId) => {
    return {
        type: DELETE_PRODUCT_SUCCESS,
        payload: productId
    };
};

export const deleteProductFail = (error) => {
    return {
        type: DELETE_PRODUCT_FAIL,
        payload: error
    };
};