import React from 'react';
import Counter from '../counter/Counter';
import { connect } from 'react-redux';
import { addItemToCart } from '../../../actions/addToCart.action';


class CartDetails extends React.Component {

    addItemToCart = (item) => {
        const { _addItemToCart } = this.props;
        _addItemToCart(item);
    }
    render() {
        const { allCartItems } = this.props;
        console.log(allCartItems);
        return (
            <div className="container">
                <div className="row">
                    {allCartItems.map(item => (
                        <div className="col s4" key={item.id}>
                            <div className="card">
                                <div className="card-image" >
                                    <img src={item.path} alt={item.name} className="productImage" />
                                </div>
                                <div className="card-content">
                                    <div className="row">
                                        <div className="col s6">
                                            <p>
                                                {item.name}
                                            </p>
                                        </div>
                                        <div className="col s6">
                                            <Counter />
                                        </div>
                                    </div>
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
    allCartItems: store.cart.items,
});

const mapDispatchToProps = (dispatch) => ({
    _addItemToCart: (item) => {
        dispatch(addItemToCart(item))
    }
})

export default connect(mapStoreToProps, mapDispatchToProps)(CartDetails);