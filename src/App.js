import React, { Component } from 'react';
import './App.css';
import AppBar from "./components/AppBar/AppBar";
import {Switch, Route,Router} from 'react-router-dom';
import Home from "./components/Home/Home";
import Nosotros from "./components/CategoryList/Items/Nosotros/Nosotros";
import Mercancia from "./components/Mercancia/Mercancia";
import Cart from "./components/Cart/Cart";
import Profile from "./components/Profile/Profile"
import Articulo from "./components/Articulo/Articulo";
import Login from "./components/Login/Login";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import {history} from "../src/utils/history";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
class App extends Component {
  
  render() {
    
    return (
      <div className="App">
      
      <Router history={history} >
      <AppBar/>
         <Switch  >
            <Route path="/" exact component={Home}  />
            <Route path="/user/cart" exact component={Cart} />
            <PrivateRoute path="/user/profile" component={Profile} />
            <Route path="/user/profileinfo" exact component={ProfileInfo} />
            <Route path="/user/login" component={Login} />
            <Route path="/user/register" component={Register} />
            <Route path="/nosotros" component={Nosotros}  />
            <Route path="/ofertas" />
            <Route path="/pedidos" />
            <Route path="/categorias" />
            <Route path="/mercancia/:id" component={Mercancia}/>  
            <Route path="/articulo/:id" exact render={() => <Articulo/> }/>
            <Route render={() => <NotFound></NotFound>} />
         </Switch>
        </Router>
       
      </div>
     
      
     
    );
  }
}

export default App;
