import React from 'react';
import { useState } from 'react';



export const Player = ({name}) => {

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