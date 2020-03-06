import React, { Component } from 'react';
import './App.css';
import AppBar from "./components/AppBar/AppBar";
import CategoryList from "./components/CategoryList/CategoryList";
import {Switch, Route,Router} from 'react-router-dom';
import Inicio from "./components/CategoryList/Items/Inicio/Inicio";
import Nosotros from "./components/CategoryList/Items/Nosotros/Nosotros";
import Footer from "./components/Footer/Footer";
import Mercancia from "./components/CategoryList/Items/Mercancia/Mercancia";
import Cart from "./components/Cart/Cart";
import Profile from "./components/Profile/Profile"
import Articulo from "./components/Articulo/Articulo";
import Login from "./components/Login/Login";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import {history} from "../src/utils/history";
import Register from "./components/Register/Register";

class App extends Component {
  render() {
    
    return (
      
     
      <div className="App">
      
      <Router history={history} >
      <AppBar/>
        <CategoryList/>
         <Switch  >
            <Route path="/" exact component={Inicio}  />
            <Route path="/user/cart" exact component={Cart} />
            <Route path="/user/profile" component={Profile} />
            <Route path="/user/profileinfo" exact component={ProfileInfo} />
            <Route path="/user/login" component={Login} />
            <Route path="/user/register" component={Register} />
          
            <Route path="/nosotros" component={Nosotros}  />
            <Route path="/ofertas" />
            <Route path="/pedidos" />
            <Route path="/categorias" />
            <Route path="/mercancia" component={Mercancia}/>     
            <Route path="/:nombre" exact component={Mercancia}/> 
            <Route path="/articulo/:id" exact render={() => <Articulo/> }/>
         </Switch>
         <Footer></Footer>
        </Router>
       
      </div>
     
      
     
    );
  }
}

export default App;
