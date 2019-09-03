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
                All Products available here :-
                <div class="row">
                    {allProducts.map((product, index) => (
                        <div className="col s4" key={index}>

                            <div class="card">
                                <div class="card-image" >
                                    <img src={product.path} alt={product.name} className="productImage" />
                                    <span class="card-title">Card Title</span>
                                    <a onClick={(e) => this.handleAddToCart(e, product)} class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                                </div>
                                <div class="card-content">
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