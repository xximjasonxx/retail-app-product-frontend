
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import ProductListComponent from './ProductListComponent';

import * as productActions from '../../redux/actions/productActions';

const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products,
        isLoading: state.productReducer.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        navigateToAddProduct: () => {
            dispatch(push("/add"));
        },
        navigateToEditProduct: (productId) => {
            dispatch(push(`/edit/${productId}`));
        },
        deleteProduct: (productId) => {
            dispatch(productActions.deleteProductAction(productId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListComponent);