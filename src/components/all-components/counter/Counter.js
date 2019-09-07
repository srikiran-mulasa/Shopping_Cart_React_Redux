import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incCount } from '../../../actions/counter.action';
import { decCount } from '../../../actions/counter.action';

class Counter extends Component {

    incCount = () => {
        const { _incrementCounter } = this.props;
        _incrementCounter();
    }

    decCount = () => {
        const { _decrementCounter } = this.props;
        _decrementCounter();
    }

    render() {
        const { countValue } = this.props;
        return (
            <div className="row">
                <div className="col s5">
                    <button className="waves-effect waves-light" onClick={this.incCount}>next</button>
                </div>
                <div className="col s2">
                    <span>{countValue}</span>
                </div>
                <div className="col s5">
                    <button className="waves-effect waves-light" onClick={this.decCount}>prev</button>
                </div>
            </div>
        );
    }
}

const mapStoreToProps = (store) => ({
    countValue: store.count.count,
});

const mapDispatchToProps = (dispatch) => ({
    _incrementCounter: () => {
        dispatch(incCount())
    },
    _decrementCounter: () => {
        dispatch(decCount())
    },
})


export default connect(mapStoreToProps, mapDispatchToProps)(Counter);





    // handleClickCount = () => {
    //     // this.setState({
    //     //     count: this.state.count + 1,
    //     // });

    //     const { count } = this.state;
    //     this.setState({
    //         count: count + 1,
    //     });
    // }
    // handleClickCountDecrement = () => {
    //     // if (this.state.count === 0) return;
    //     // this.setState({
    //     //     count: this.state.count - 1,
    //     // });

    //     const { count } = this.state;
    //     if (count === 0) return;
    //     this.setState({
    //         count: count - 1,
    //     });
    // }