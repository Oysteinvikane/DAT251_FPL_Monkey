import React, { useEffect } from 'react';
import styled from 'styled-components';
import logo from './logos/fplm_logo.png';
import { useState } from 'react';
const GridWrapper = styled.div`
  background:#f3f0e6
  `;


export const Player = (props) => {

  const [message, setMessage] = useState('');
  const [playerName, setPlayerName] = useState('');

  
    fetch('/playerPP')
      .then(response => response.text())
      .then(message => {
        setMessage(message);
      })
    
  return (  
    <header className="Home-header" >
      <img src={logo} className="Home-logo" alt="logo" />

        <p>
          {message}
        </p>   
    </header >);
};

export default Player;
