import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore, applyMiddleware,combineReducers} from "redux";
import {Provider} from "react-redux"
import thunk from "redux-thunk";
import cartReducer from "../src/reducer/cartReducer";
import clientReducer from "../src/reducer/clientReducer";
import {fetchClient} from "../src/actions/clientActions"


const middleware = applyMiddleware(thunk)

const rootReducer = combineReducers({client:clientReducer, cart:cartReducer})

const store = createStore(rootReducer,middleware);

store.subscribe(()=>{
  console.log(store.getState())
} )


ReactDOM.render(
  <Provider store={store}> 
    <App />
   </Provider>,
  document.getElementById('root')
);
