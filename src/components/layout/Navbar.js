import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { LAU, CAU } from '../vari';
class Navbar extends Component {
    render() {
        return (
          //menu for the app
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Buse ECommerce
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productList">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/userReg">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
                
            </div>
        )
    }
}
export default Navbar;