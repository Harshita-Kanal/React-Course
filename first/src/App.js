import React, {Component} from 'react';
import Menu from "./components/MenuComponents";
import logo from './logo.svg';
import  {Navbar , NavbarBrand} from 'reactstrap';
import './App.css';

class App extends Component {
  render(){
    return(
      <div >
       <Navbar dark color="primary">
          <div className = "container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
       </Navbar>
       <Menu />
      </div>
    );

  }
}

export default App;
