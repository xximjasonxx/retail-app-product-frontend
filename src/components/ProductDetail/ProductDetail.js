
import { connect } from 'react-redux';

import ProductDetailComponent from './ProductDetailComponent';
import * as productActions from '../../redux/actions/productActions';

const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveItem: (isEditing, productData) => {
            if (isEditing) {
                dispatch(productActions.updateProductAction(productData));
            }
            else {
                dispatch(productActions.createProductAction(productData));
            }
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailComponent);