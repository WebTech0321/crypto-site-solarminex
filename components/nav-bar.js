import React, {useState} from "react"
import { Navbar as B4Navbar, Nav } from 'react-bootstrap'
import logo from '../assets/img/logo.png'

const NavBar = () => {    
    return (
        <B4Navbar collapseOnSelect expand="md" className="land-nav navbar-default">
            <div className="navbar-header">
                <B4Navbar.Brand href="#">
                    <img src={logo} alt="image" />
                    <h2>SolarMineX</h2>
                </B4Navbar.Brand>
                
                <div className="d-flex">
                    <B4Navbar.Toggle aria-controls="responsive-navbar-nav" className="justify-content-end" >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </B4Navbar.Toggle>
                </div>
            </div>

            <B4Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="nav navbar-nav" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="#products">Products</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="#buynow">Buy Now</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="#solarbag">Solar bag</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </B4Navbar.Collapse>
        </B4Navbar>
    );
  };
  
  export default NavBar;
  