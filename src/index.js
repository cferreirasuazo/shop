import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore, applyMiddleware,combineReducers} from "redux";
import {Provider} from "react-redux"
import thunk from "redux-thunk";
import cartReducer from "../src/reducer/cartReducer";
import clientReducer from "../src/reducer/clientReducer";
import {FETCH_CLIENT, SET_LOG} from "../src/actions/clientActions"
import {FETCH_ARTICLES,createOrder} from "./actions/cartActions";

const middleware = applyMiddleware(thunk)

const rootReducer = combineReducers({client:clientReducer, cart:cartReducer})

const store = createStore(rootReducer,middleware);

if(localStorage.getItem("client")){
  var client = JSON.parse(localStorage.getItem("client"))
  var cart = JSON.parse(localStorage.getItem("cart"))
    store.dispatch({
      type:FETCH_CLIENT,
      payload:client
    })

    store.dispatch({
      type:FETCH_ARTICLES,
      payload:cart
    })

    store.dispatch({
      type:SET_LOG,
      payload:true
    })
}

store.subscribe(()=>{
    
} )

ReactDOM.render(
  <Provider store={store}> 
    <App />
   </Provider>,
  document.getElementById('root')
);
