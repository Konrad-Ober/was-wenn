import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Nav from "./Nav";
import Recht from "./Recht";
import Home from "./Home";
import Impressum from "./Impressum";
import Lustiges from "./Lustiges"
import Ein from "./Einfuhrung"
import Maske from "./Maske"
import Aerzte from "./Aerzte"
import Flyer from "./Flyer"
import Impfung from "./Impfung"
import Wirtschaft from "./Wirtschaft"


class App extends Component {
  render() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
       <h1 className="Corona">Corona - Sagen sie uns wirklich die Wahrheit?</h1>    
      <Nav></Nav>  
      <p className="GMV">Gesunder Menschenverstand ist gefragt.</p> 
      </header>
       
     
      <div className="content">
        <Switch>
        <Route path="/" exact strict component={Home} />			  		
        <Route path="/Recht" component={Recht} />	
        <Route path="/Einfuhrung" component={Ein} />	
        <Route path="/Lustiges" component={Lustiges} />
        <Route path="/Impfung" component={Impfung} />
        <Route path="/Impressum" component={Impressum} />	
        <Route path="/Maske" component={Maske} />	
        <Route path="/Aerzte" component={Aerzte} />		
        <Route path="/Wirtschaft" component={Wirtschaft} />	
        <Route path="/Flyer" component={Flyer} />		
        </Switch>		  
  
      </div>
      <footer>Was, wenn die Covidioten recht haben?</footer>
    </div>
    
  </Router>
  );
}
}

export default App;
