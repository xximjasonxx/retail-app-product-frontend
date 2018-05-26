
import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import './ProductRow.css';

const currencyFormatter = require('currency-formatter');
const ProductRow = ({ product, editAction, deleteAction }) => {
    return (
        <div className="product-row-container">
            <h3>{product.productName}</h3>
            <div className="product-description-container">
                {product.productDescription}
            </div>
            <h4>{currencyFormatter.format(product.price, { code: 'USD' })}</h4>
            <h4>{product.count}</h4>
            <div className="menu-container">
                <div>
                    <IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}>
                        <MenuItem primaryText="Edit" onClick={() => { editAction(product.productId); }} />
                        <MenuItem primaryText="Delete" onClick={() => { deleteAction(product.productId); }} />
                    </IconMenu>
                </div>
            </div>
        </div>
    );
};

export default ProductRow;