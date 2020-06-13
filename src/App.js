import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import ProductAdd from './components/pages/ProductAdd';
import Login from './components/auth/Login';

import './App.css';
import ProductList from './components/pages/ProductList';
import ProductEdit from './components/pages/ProductEdit';
function onAuthRequired({ history }) {
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer="https://dev-592092.okta.com/oauth2/default"
          client_id="0oacsjdy9qbgpjcb84x6"
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}
        >
          <div className="App">
            <Navbar />
            <div className="container">
              <Route path="/" exact={true} component={Home} />
              <SecureRoute path="/productAdd" exact={true} component={ProductAdd} />
              <Route path="/productList" exact={true} component={ProductList} />
              <SecureRoute path="/edit/:id" exact={true} component={ProductEdit} />
              <Route
                path="/login"
                render={() => (
                  <Login baseUrl="https://dev-592092.okta.com" />
                )}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
            </div>
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;