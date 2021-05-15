import { Component } from 'react';
import { connect } from 'react-redux';
import { SelectCounterSum } from './selectors';

import './counter-sum.component.scss';

let i = 1;
class CounterSum extends Component {
  
    render() {
        return (
            <div className="counter-sum">
                <h1>{this.props.sum}</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    i++;
    console.log('from counter-sum');
    console.log(i)
    return {
        /*
        This logic will be keep executing everytime athough there is no change in counterNumberArray
        we are passing so that we can show this code is keep executing when doing operation on 
        any other state other than counter state. so i keep adding up to this logic because
        it is getting executed.
        sum: state.counter.counterNumber.reduce((accum, number)=>(accum+number),i)*/

        sum: SelectCounterSum(state,i)
        /*
            Even if there is no change in counter state above code will be executed and
            SelectCounterSum will be called which is a reselect selector but inside this
            selector code will be only executed if there is change in counter state otherwise 
            it will return old cached result. 
        */

    }
}
export default connect(mapStateToProps)(CounterSum);