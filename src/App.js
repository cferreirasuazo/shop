import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import AppBar from "./components/AppBar/AppBar";
import CategoryList from "./components/CategoryList/CategoryList";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Inicio from "./components/CategoryList/Items/Inicio/Inicio";
import Nosotros from "./components/CategoryList/Items/Nosotros/Nosotros";
import Footer from "./components/Footer/Footer";
import shopping_bag from "./components/Logo/shopping_bag.png";
import Mercancia from "./components/CategoryList/Items/Mercancia/Mercancia";
import Articulo from "./components/Articulo/Articulo"

class App extends Component {
  render() {
    
    return (
      
     
      <div className="App">
      <BrowserRouter>
      <AppBar/>
      
        <div className="App-header">
            <img src={shopping_bag} />
        </div>
        <CategoryList/>
         <Switch>
            <Route path="/" exact component={Inicio}  />
            <Route path="/nosotros" component={Nosotros}  />
            <Route path="/ofertas" />
            <Route path="/pedidos" />
            <Route path="/categorias" />
            <Route path="/mercancia" component={Mercancia}/>     
            <Route path="/:nombre" component={Mercancia}/>      
         </Switch>
         <Footer></Footer>
        </BrowserRouter>
       
      </div>
     
      
     
    );
  }
}

export default App;
