import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import "./App.css";
import logo from "../src/assets/logo-starglobal.png";
import Login from "./components/header/Login";
import Register from "./components/header/Register";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Content from './components/pages/Content';
import Contact from "./components/pages/Contact";

const App = () => {
  return (
    <div>
      <Navbar
        bg="myColor"
        variant="light"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        <Navbar.Brand>
          <img src={logo} height="40px" width="120px" />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us">About us</Nav.Link>
            <Nav.Link as={Link} to="/content">Content</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <NavDropdown title="Products">
              <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
              <NavDropdown.Item href="#products/coffe">Coffe</NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">
                Chotolate
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#login" className="justify-content-end">
              <Button
                data-toggle="modal"
                data-target="#login-form"
                variant="outline-info"
              >
                Sign In
              </Button>{" "}
              <Button
                data-toggle="modal"
                data-target="#register-form"
                variant="outline-warning"
              >
                Sign Up
              </Button>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Login />
      <Register />
      

      <Switch>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/about-us">
            <About/>
          </Route>
          <Route path="/content">
            <Content/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
      </Switch>
    </div>
  );
};

export default App;
