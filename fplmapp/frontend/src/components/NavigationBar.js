import React, {useState} from 'react';
import {Nav, Navbar, FormControl, Button, Form} from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../logos/logo.png';
import {useHistory} from 'react-router-dom';

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
`;

export const NavigationBar = ({ parentCallback}) => {

  let history = useHistory();
  const [playerName, setplayerName] = useState('');

  function updateValue(evt){
    let nameHolder = { ...playerName }
    nameHolder = evt.target.value;
    setplayerName(nameHolder);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/player')
    parentCallback(playerName)

  }

  return (
    <Styles>
      <Navbar collapseOnSelect expand="lg" fixed="top">
        <Navbar.Brand href="/">FPLMonkey
            <img alt="" src={logo} width="30%" height="20%"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Form className="form-inline" onSubmit={(handleSubmit)}>
          <FormControl className="form-control mr-sm-2" type="text" value={playerName} placeholder="Search" autoComplete="on" onChange={updateValue}/>
          <Button className="btn btn-outline-success my-2 my-sm-0" type="submit" variant="outline-success">Search</Button>
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
  }