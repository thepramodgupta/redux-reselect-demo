import React, { Component } from 'react';
import { connect } from 'react-redux';

import './counter.styles.scss';

class Counter extends Component {
    increment = () => {
        this.props.dispatch({type:"INCREMENT"});
    };

    decrement = () => {
        this.props.dispatch({type:"DECREMENT"});
    };

    pushNumber = () => {
        this.props.dispatch({type:"PUSH_NUMBER", payload: 0});
    }

    render() {
        return (
            <div className="counter">
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>&ndash;</button>
                    <span className="count">{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                    <br/>
                    <button id="pushNumber" onClick={this.pushNumber}>PushNumber</button>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    console.log(`from counter component `);
    console.log(state);
    return {
        count: state.counter.count
    }
};

// const mapDispatchToProps = dispatch => ({
//     pushNumber: () => {
//         dispatch({
//             type:"PUSH_NUMBER",
//             payload: 7
//         })
//     }
    
// })
export default connect(mapStateToProps, null)(Counter);