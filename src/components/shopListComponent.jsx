import { Component } from 'react';
import { connect } from 'react-redux';
import './shopList.styles.scss';

class ShopList extends Component {
    increment = () => {
        this.props.dispatch({type: "ADD_QUANTITY"});
    }

    decrement = () => {
        this.props.dispatch({type: "REMOVE_QUANITY "});
    }

    render() {
        return(
            <div className="shopList">
                <span>{this.props.shopList.Name}</span>
                <div>
                    <button onClick={this.decrement}>&ndash;</button>
                    <span className="quanity">{this.props.shopList.quanity}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('from shopListComponent')
    console.log(state);
   return {
       shopList: state.shopList
   }
}

export default connect(mapStateToProps)(ShopList);