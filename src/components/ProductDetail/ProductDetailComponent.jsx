
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import get from 'lodash/get';

import './ProductDetail.css';

class ProductDetailComponent extends React.Component {
    constructor(props)  {
        super(props);

        const product = props.products.find((x) => { return x.productId === props.match.params.product_id; });
        this.state = {
            productId:  get(product, 'productId', ''),
            productName: get(product, 'productName', ''),
            productDescription: get(product, 'productDescription', ''),
            price: get(product, 'price', ''),
            count: get(product, 'count', '')
        };
    }

    onProductNameChange = (ev, value) => {
        this.setState({
            productName: value
        });
    }

    onProductDescriptionChange = (ev, value) => {
        this.setState({
            productDescription: value
        });
    }

    onProductPriceChange = (ev, value) => {
        this.setState({
            price: value
        });
    }

    onProductOnHandCountChange = (ev, value) => {
        this.setState({
            count: value
        });
    }

    render() {
        const { match, saveItem } = this.props;
        const isEditing = match.params.product_id;
        const { productName, productDescription, price, count } = this.state;

        return (
            <div className="product-detail-container">
                {!isEditing && <h2>Create Product</h2>}
                {isEditing && <h2>Edit Product</h2>}

                <div className="form-container">
                    <div>
                        <TextField
                            hintText="Product Name"
                            fullWidth={true}
                            value={productName}
                            required
                            onChange={this.onProductNameChange}
                        />
                    </div>
                    <div>
                        <TextField
                            hintText="Product Desription"
                            fullWidth={true}
                            multiLine={true}
                            rows={1}
                            rowsMax={10}
                            value={productDescription}
                            onChange={this.onProductDescriptionChange}
                        />
                    </div>
                    <div>
                        <TextField
                            hintText="Price"
                            type="number"
                            required
                            value={price}
                            onChange={this.onProductPriceChange}
                        />
                    </div>
                    <div>
                        <TextField
                            hintText="On-Hand Count"
                            required
                            value={count}
                            onChange={this.onProductOnHandCountChange}
                        />
                    </div>
                    <div>
                        <RaisedButton
                            label={isEditing ? "Save" : "Create"}
                            primary={true}
                            onClick={() => { saveItem(isEditing, this.state); }}
                        />
                    </div>
                </div>
            </div>
        );
    }
};

export default ProductDetailComponent;