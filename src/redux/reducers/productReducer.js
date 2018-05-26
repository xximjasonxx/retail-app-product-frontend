
import * as actions from '../actions/productActions';

const initialState = {
    products: [],
    isLoading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.LOAD_PRODUCTS_START: {
            return Object.assign({}, state, {
                isLoading: true
            });
        }

        case actions.LOAD_PRODUCTS_SUCCESS: {
            return Object.assign({}, state, {
                products: action.payload,
                isLoading: false
            });
        }

        case actions.SAVE_PRODUCT_SUCCESS: {
            return Object.assign({}, state, {
                products: [
                    action.payload,
                    ...state.products.filter((x) => { return x.productId !== action.payload.productId; }),
                ]
            });
        }

        case actions.DELETE_PRODUCT_SUCCESS: {
            return Object.assign({}, state, {
                products: state.products.filter((x) => { return x.productId !== action.payload; })
            });
        }

        default:
            return state;
    }
};
