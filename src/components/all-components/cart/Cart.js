import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../../actions/addToCart.action';

class Cart extends React.Component {

    addItemToCart = (item) => {
        const { _addItemToCart } = this.props;
        _addItemToCart(item);
    }

    handleDisplayType = () => {
        const { displayType } = this.state;
        if (displayType === 'allProducts') {
          this.setState({
            displayType: 'cartList',
          });
        } else {
          this.setState({
            displayType: 'allProducts',
          });
        }
      }

    render() {
        const { allCartItems } = this.props;
        return (
            <button className="waves-effect waves-light btn" onClick={this.handleDisplayType}>
                {/* {props.displayType === 'allProducts' ? 'Show Cart Items' : 'All Products'} */}
                <span className="new badge">{allCartItems.length}</span>
            </button>
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

export default connect(mapStoreToProps, mapDispatchToProps)(Cart);