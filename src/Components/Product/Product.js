import React from 'react';

import "./Product.css"


class Product extends React.Component {

    render() {
        return (
            <div className="meat__content">
                <a className="meat__link" style={{ backgroundImage: `url(${this.props.image_url})` }}></a>
                <h3>{this.props.name}</h3>
            </div>
        )
    }

}

export default Product;