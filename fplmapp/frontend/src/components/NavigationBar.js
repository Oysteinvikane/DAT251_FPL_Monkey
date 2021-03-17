import React from 'react';
import {Nav, Navbar, Form, FormControl} from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../logos/logo.png';

const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-right {
    position: absolute !important;
    right: 25%;
    left: 25%;
  }
`;

export const NavigationBar = () => (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">FPLMonkey
            <img alt="" src={logo} width="30%" height="20%"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Form className="form-right">
          <FormControl type="text" placeholder="Search player" className="" />
        </Form>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
            <Nav.Item><Nav.Link href="/player">Player</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  )