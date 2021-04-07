import React, {useState, useCallback} from 'react';
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';
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

export const NavigationBar = ({ parentCallback}) => {

  const [playerName, setplayerName] = useState('');

  function updateValue(evt){
    let nameHolder = { ...playerName }
    nameHolder = evt.target.value;
    setplayerName(nameHolder);
  }

  return (
    <Styles>
      <Navbar collapseOnSelect expand="lg" fixed="top">
        <Navbar.Brand href="/">FPLMonkey
            <img alt="" src={logo} width="30%" height="20%"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <FormControl type="text" value={playerName} placeholder="Search" onChange={updateValue}/>
        <Button type="submit" variant="outline-success" onClick={() => parentCallback(playerName)} >Search</Button>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
            <Nav.Item><Nav.Link href="/player">Player</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  )
  }

