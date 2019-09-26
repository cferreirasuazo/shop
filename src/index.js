import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore} from "redux";
import cartReducer from "../src/reducer/cartReducer";
import {Provider} from "react-redux"

const store = createStore(cartReducer);

store.subscribe(()=>{
  console.log(store.getState())
} )

ReactDOM.render(
  <Provider store={store}> 
    <App />
   </Provider>,
  document.getElementById('root')
);
