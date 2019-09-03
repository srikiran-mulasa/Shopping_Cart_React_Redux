import React from 'react';

function Cart(props) {
    return (
        <div>
            <li>
                <button class="waves-effect waves-light btn" onClick={props.showDetails}>
                    {props.displayType === 'allProducts' ? 'Show Cart Items' : 'All Products'}
                    <span class="new badge">{props.cartDetails.length}</span>
                </button>
            </li>
        </div>
    )
}

export default Cart;