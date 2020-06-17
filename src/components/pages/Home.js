import { LAU, CAU } from '../vari';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import { saddlebrown } from 'color-name';
import banner from '../../assets/banner.jpg';
import seeproduct from '../../assets/seeproduct.jpg';
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
      //based on login status display content of home page
      const mainContent = this.state.authenticated ? (
        <div>
          <p className="lead">
            Welcome to the buse ecommerce portal,{' '}
            
          </p>
          <Link className="btn btn-light btn-lg" to="/productAdd">
            Add Product
          </Link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <button className="btn btn-light btn-lg" onClick={this.logout}>
            Logout
          </button>          
        </div>
      ) : (
        <div>
          <div className="row">
              <div className="col">            
                <div className="card">
                  <img className="card-img-top" src={banner} alt="loginbanner"/>
                  <div className="card-body">
                    <div className="card-text">
                        <p className="lead">
                          Just came to view product, go through this link ;)
                        </p>
                      <Link className="btn btn-dark btn-md" to="/productList">
                        Products
                      </Link>
                    </div>                                      
                  </div>
                  </div>
              </div>
              <div className="col">
              <div className="card">
                  <img className="card-img-top" src={seeproduct} alt="loginbanner"/>
                  <div className="card-body">
                    <div className="card-text">
                        <p className="lead">
                        For beginning your selling journey follow here.
                        </p>
                        <button className="btn btn-dark btn-md" onClick={this.login}>
                          Login
                        </button>
                    </div>                                      
                  </div>
                  </div>
              </div>
            </div>
          
          
          
          
          
        </div>
      );

      return (
        <div>
          {/* display default text for home page */}
          <div className="jumbotron">
            <h1 className="display-4">BUSE Ecommerce</h1>
            <p>Welcome to the platform where you can sell your existing item. As well if you get interested to some of the product listed here, ofcourse buy it too. That's what BUSE serves you!!!</p>          
          </div>
          {/* display content based on login */}
          <div className="container">
            {mainContent}
          </div>        
        </div>
      );
    }
  }
);
