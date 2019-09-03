import React from 'react';




function CartDetails(props) {


    var count = 0;

    const handleClickCount = () => {
        // this.setState({
        //     count: this.state.count + 1,
        // });

        const { count } = this.state;
        this.setState({
            count: count + 1,
        });
    }
    const handleClickCountDecrement = () => {
        // if (this.state.count === 0) return;
        // this.setState({
        //     count: this.state.count - 1,
        // });

        const { count } = this.state;
        if (count === 0) return;
        this.setState({
            count: count - 1,
        });
    }
    return (
        <div className="container">
            <div class="row">
                {props.cartItems.map(item => (
                    <div className="col s4" key={item.id}>
                        <div class="card">
                            <div class="card-image" >
                                <img src={item.path} alt={item.name} className="productImage" />
                                <span class="card-title">{item.name}</span>
                            </div>
                            <div class="card-content">
                                <p>
                                    {item.name}
                                </p>

                                {/* <button onClick={handleClickCount}>
                                    next
                                </button>
                                <div>
                                    {count}
                                </div>
                                <button onClick={handleClickCountDecrement}>
                                    prev
                                </button> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CartDetails;