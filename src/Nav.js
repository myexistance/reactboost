import React, {Component} from 'react';
import logo from './logo.svg';
// import './App.css';
import './Nav.css';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer }
from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";


// function Nav() {

class Nav extends Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));
  };

  render() {





    return (
      <Router>
        <MDBContainer>
          <MDBNavbar
            color='light-blue lighten-4'
            style={{ marginTop: '20px' }}
            light
          >
            <MDBContainer>
              <MDBNavbarBrand>Yeezy Boost</MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse('navbarCollapse1')}
              />
              <MDBCollapse
                id='navbarCollapse1'
                isOpen={this.state.collapseID}
                navbar
              >
                <MDBNavbarNav left>
                  <MDBNavItem>
                  <Link activeClass="active"
                        to="Image"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {700}>
                    <MDBNavLink to='#!'>Latest release</MDBNavLink>
                  </Link>
                  </MDBNavItem>
                  <MDBNavItem>
                  <Link activeClass="active"
                        to="Gallery"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration= {700}>
                    <MDBNavLink to='#!'>Gallery</MDBNavLink>
                    </Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to='#!'>Contact</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>


        </MDBContainer>
      </Router>





    );
  }
}

export default Nav;
