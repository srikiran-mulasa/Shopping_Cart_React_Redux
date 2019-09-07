import React from 'react';
import Counter from '../counter/Counter';

function CartDetails(props) {

    return (
        <div className="container">
            <div className="row">
                {props.cartItems.map(item => (
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

export default CartDetails;