import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import ProductAdd from './components/pages/ProductAdd';
function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Navbar/> 
        <div className="container">
          <Route path="/" exact={true} component={Home}/>
          <Route path="/productAdd" exact={true} component={ProductAdd}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
