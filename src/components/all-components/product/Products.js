import React from 'react';
import './product.css';
import data from '../../../dataList';
import { connect } from 'react-redux';
import { allProducts } from '../../../actions/allProducts.action';
import { addItemToCart } from '../../../actions/addToCart.action';


class Products extends React.Component {

    componentDidMount() {
        const { _allProducts } = this.props;
        _allProducts(data);
    }
  
    handleAddToCart = (e, item) => {
        const { _addItemToCart } = this.props;
        _addItemToCart(item);
    }

    render() {
        const { productList } = this.props;
        return (
            <div className="container">
                <div className="row">
                    {productList.map((product, index) => (
                        <div className="col s4" key={index}>

                            <div className="card">
                                <div className="card-image" >
                                    <img src={product.path} alt={product.name} className="productImage" />
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

const mapStoreToProps = (store) => ({
    productList: store.allProducts.items,
});

const mapDispatchToProps = (dispatch) => ({
    _allProducts: (data) => {
        dispatch(allProducts(data))
    },
    _addItemToCart: (item) => {
        dispatch(addItemToCart(item))
    }
})

export default connect(mapStoreToProps, mapDispatchToProps)(Products);