import React, { useEffect } from 'react';
import styled from 'styled-components';
import logo from './logos/fplm_logo.png';
import { useParams } from "react-router-dom";
import { useState } from 'react';
const GridWrapper = styled.div`
  background:#f3f0e6
  `;


export const Player = ({name}) => {

  const [message, setMessage] = useState([]);
  const [playerName, setPlayerName] = useState(name);

  const encodedvalue = encodeURIComponent(name)
    fetch('/flask/playerPP?name=' + encodedvalue)
    .then(response => response.json())
    .then(message => {
    setMessage(...message);
    console.log('loaded')
  });

  if (message.length == 0) { //empty message
    return ( 
      <header className="Home-header" >
        <img src={logo} className="Home-logo" alt="logo" />
          <p>
            Search for a player at the top
          </p>
      </header >);
  } else {
  return ( 
    <header className="Home-header" >
      <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Player: {message.player}
        </p>
        <p>
          Season: {message.season} Gameweek: {message.gw}
        </p>
        <p>
          Opponent next gameweek: {message.opponent_team}
        </p>
        <p>
          Predicted points for next gameweek: {message.predicted_points}
        </p>
    </header >);
  }
};


export default Player;
