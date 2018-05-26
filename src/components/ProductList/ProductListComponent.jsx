
import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';

import './ProductList.css';
import NoProductsView from './NoProductsView/NoProductsView';
import ProductRow from './ProductRow/ProductRow';

const style = {
    margin: 0,
    position: 'fixed',
    top: 'auto',
    right: 20,
    left: 'auto',
    bottom: 20
};

class ProductListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            targetProductIdToDelete: '',
            productDeleteConfirmDialogOpen: false
        };
    }

    dismissModal = () => {
        this.setState({
            targetProductIdToDelete: '',
            productDeleteConfirmDialogOpen: false
        });
    }

    openDeleteConfirmation = (productId) => {
        this.setState({
            targetProductIdToDelete: productId,
            productDeleteConfirmDialogOpen: true
        });
    }

    confirmDelete = () => {
        this.props.deleteProduct(this.state.targetProductIdToDelete);
        this.setState({
            targetProductIdToDelete: '',
            productDeleteConfirmDialogOpen: false
        });
    }

    render() {
        const { products, navigateToAddProduct, navigateToEditProduct, isLoading } = this.props;
        const actions = [
            <FlatButton
                label="Cancel"
                onClick={this.dismissModal}
            />,
            <FlatButton
                label="Delete"
                secondary={true}
                onClick={this.confirmDelete}
            />
        ];

        return (
            <div className="product-list-container">
                <h2>Your Products</h2>
                {!isLoading && products.length === 0 && <NoProductsView />}
                {!isLoading && products.length > 0 &&
                    <div>
                        {products.map((product) => {
                            return <ProductRow
                                key={product.productId}
                                product={product}
                                editAction={navigateToEditProduct}
                                deleteAction={this.openDeleteConfirmation}
                            />; })
                        }
                    </div>
                }
                {!isLoading && 
                <FloatingActionButton style={style} onClick={navigateToAddProduct}>
                    <ContentAdd />
                </FloatingActionButton>
                }

                {isLoading &&
                <div className="loading-container">
                    <CircularProgress size={100} thickness={7} />
                </div>
                }

                <Dialog
                    title="Delete Product"
                    actions={actions}
                    modal={false}
                    open={this.state.productDeleteConfirmDialogOpen}
                    onRequestClose={this.dismissModal}
                >
                    <div>Please confirm you wish to delete the product</div>
                </Dialog>
            </div>
        );
    }
}

export default ProductListComponent;