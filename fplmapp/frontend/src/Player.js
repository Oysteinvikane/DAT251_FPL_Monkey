<<<<<<< HEAD
import React from 'react';
 
export const Player = (props) => (
  <header className="Player-header">

        <p>
            Player page
        </p>
        <p>
            Here you will soon see all the stats for your chosen player.
        </p>
</header>
)
=======
import React, { useEffect } from 'react';
import styled from 'styled-components';
import logo from './logos/fplm_logo.png';
import { useParams } from "react-router-dom";
import { useState } from 'react';
const GridWrapper = styled.div`
  background:#f3f0e6
  `;


export const Player = ({name}) => {

  const [message, setMessage] = useState('');
  const [playerName, setPlayerName] = useState(name);

  const playerURI = encodeURIComponent(name)

  
    fetch('/playerPP?name=' + playerURI)
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
>>>>>>> main
