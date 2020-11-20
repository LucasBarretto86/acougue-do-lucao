import React from 'react';

import "./ProductList.css";

import Product from "../Product/Product"

class ProductList extends React.Component {

    render() {
        return (
            <div className="meat">
                {
                    this.props.products.map(product => {
                        return <Product name={product.name} image_url={product.image_url} />
                    })
                }
            </div>
        )
    }

}

export default ProductList;
