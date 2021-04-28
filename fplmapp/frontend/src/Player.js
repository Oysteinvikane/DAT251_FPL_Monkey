import React from 'react';
import logo from './logos/fplm_logo.png';

  export const Player = ({player}) => {

    if (player.player === undefined) { //No player selected
      return ( 
        <header className="Home-header" >
          <img src={logo} className="Home-logo" alt="logo" />
            <p>
              Search for a player at the top
            </p>
        </header >);
    } else {
    return( 
      <header className="Home-header" >
        <img src={logo} className="Home-logo" alt="logo" />
          <p>
            Player: {player.player}
          </p>
          <p>
            Season: {player.season} Gameweek: {player.gw}
          </p>
          <p>
            Opponent next gameweek: {player.opponent_team}
          </p>
          <p>
            Predicted points for next gameweek: {player.predicted_points}
          </p>
      </header >);
    }
  };
  
  
  export default Player;
