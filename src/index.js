import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter.component';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import './index.css';
import ShopList from './components/shopListComponent';
import CounterSum from './components/counter-sum.component';


//Count Reducer
const counterIntialState = {
  count: 42,
  counterNumber: [42,17,3,1,4,1,2,5,7,8,9]
};

function countReducer(state=counterIntialState, action) {
  switch(action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count+1
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count-1
      };
    case "PUSH_NUMBER":
      return {
        ...state,
        counterNumber: [...state.counterNumber, action.payload]
      }
    default:
      return state;
  }
}

const shopListInitialState = {
  Name: "Iphone 14",
  quanity: 1
};


//ShopList reducer
function ShopListReducer(state=shopListInitialState, action) {
  switch(action.type) {
    case "ADD_QUANTITY":
      return {
        ...state,
        quanity : state.quanity + 1
      };
    case "REMOVE_QUANITY":
      return {
        ...state,
        quanity : state.quanity - 1
      };
    default:
      return state;
  }
};

//CountItems 

const rootReducer = combineReducers ({ 
  counter: countReducer,
  shopList: ShopListReducer
})

const store = createStore(rootReducer);

// store.dispatch({type:"INCREMENT"});
// store.dispatch({type:"DECREMENT"});

ReactDOM.render(
  <Provider store={store}>
    <Counter />
    <ShopList />
    <CounterSum />
  </Provider>,
  document.getElementById('root')
);

