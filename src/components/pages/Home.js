import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import { saddlebrown } from 'color-name';

export default withAuth(
  class Home extends Component {
    state = { authenticated: null };

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login('/');
    };

    logout = async () => {
      this.props.auth.logout('/');
    };

    render() {
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
        <div>
          <p className="lead">
            You have entered the staff portal,{' '}
            
          </p>
          <button className="btn btn-light btn-lg" onClick={this.logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p className="lead">
            Just came to view product, go through this link ;)
          </p>
          <Link className="btn btn-dark btn-md" to="/productList">
            Products
          </Link>
          For beginning your selling journey follow here.
          <button className="btn btn-dark btn-md" onClick={this.login}>
            Login
          </button>
          
        </div>
      );

      return (
        <div>
        <div className="jumbotron">
          <h1 className="display-4">BUSE Ecommerce</h1>
          <p>Welcome to the platform where you can sell your existing item. As well if you get interested to some of the product listed here, ofcourse buy it too. That's what BUSE serves you!!!</p>          
        </div>
        <div className="container">
        <div className="row">
    <div className="col">
      1 of 3
    </div>
    <div className="col">
    <h1 className="text-hide" style={{ background-image: "url('./public/images/banner.jpg')" }}>d</div>
   <p> {mainContent}</p>
    </div>
    <div className="col">
      3 of 3
    </div>
  </div>
          {mainContent}
        </div>
        </div>
      );
    }
  }
);
