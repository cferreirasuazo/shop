import React, { Component } from 'react';
import './App.css';
import AppBar from "./components/AppBar/AppBar";
import CategoryList from "./components/CategoryList/CategoryList";
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Inicio from "./components/CategoryList/Items/Inicio/Inicio";
import Nosotros from "./components/CategoryList/Items/Nosotros/Nosotros";
import Footer from "./components/Footer/Footer";
import shopping_bag from "./components/Logo/shopping_bag.png";
import Mercancia from "./components/CategoryList/Items/Mercancia/Mercancia";
import Carrito from "./components/Carrito/Carrito";

class App extends Component {
  render() {
    
    return (
      
     
      <div className="App">
      <BrowserRouter>
      <AppBar/>
      
        <div className="App-header">
            <img alt={"header"} src={shopping_bag} />
        </div>
        <Link to={"/user/cart"}>Default</Link>
        <CategoryList/>
         <Switch>
            <Route path="/" exact component={Inicio}  />
            <Route path="/user/cart" exact component={Carrito} />


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
