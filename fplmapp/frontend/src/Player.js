import React from 'react';
<<<<<<< HEAD
import { useState } from 'react';

=======
import logo from './logos/fplm_logo.png';
import { useState } from 'react';
>>>>>>> main


  export const Player = ({name}) => {

<<<<<<< HEAD
  const [message, setMessage] = useState('');
  const encodedvalue = encodeURIComponent(name)
    fetch('/flask/playerPP?name=' + encodedvalue)
    .then(response => response.text())
    .then(message => {
    setMessage(message);
    console.log("loaded")
  });

    
  return ( 
    <header className="Home-header" >
      <div>
        <p>Playername: {name}</p>
        <p>Playerstats: {message}</p>
      </div>
         
    </header >);
};

export default Player;
=======
    const [message, setMessage] = useState([]);
  
  
    const encodedvalue = encodeURIComponent(name)
      fetch('/flask/playerPP?name=' + encodedvalue)
      .then(response => response.json())
      .then(message => {
      setMessage(...message);
      console.log('loaded')
    });
  
    if (message.length === 0) { //empty message
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
>>>>>>> main
