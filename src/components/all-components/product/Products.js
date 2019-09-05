import React from 'react';
import './product.css';

class Products extends React.Component {
    handleAddToCart = (e, item) => {
        const { addToCart } = this.props;
        addToCart(item);
    }
    render() {
        const { allProducts } = this.props;
        return (
            <div className="container">
                <div className="row">
                    {allProducts.map((product, index) => (
                        <div className="col s4" key={index}>

                            <div className="card">
                                <div className="card-image" >
                                    <img src={product.path} alt={product.name} className="productImage" />
                                    <span className="card-title">Card Title</span>
                                    <a onClick={(e) => this.handleAddToCart(e, product)} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                                </div>
                                <div className="card-content">
                                    <p>
                                        {product.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Products;