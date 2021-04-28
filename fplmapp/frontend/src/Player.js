import React from 'react';
import logo from './logos/fplm_logo.png';

  export const Player = ({player}) => {

    const roundNum = (num, dec) => {
      return ((num * 100) / 100).toFixed(2);
      
    }

    if (Object.keys(player).length === 0) { //No player selected
      return ( 
        <header className="Home-header" >
          <img src={logo} className="Home-logo" alt="logo" />
            <p>
              Search for a player at the top
            </p>
        </header >);
    } else if (Object.keys(player).length === 2){
      return( 
        <header className="Home-header" >
          <img src={logo} className="Home-logo" alt="logo" />
            <p>
              Player: {player[0].player}
            </p>
            <p>
              Season: {player[0].season} Gameweek: {player[0].gw}
            </p>
            <p>
              Opponent next gameweek: {player[0].opponent_team} + {player[1].opponent_team}
            </p>
            <p>
              Predicted points for next gameweek: {roundNum(player[0].predicted_points, 2)} + {roundNum(player[1].predicted_points, 2)} = {roundNum(player[0].predicted_points + player[1].predicted_points, 2)}
            </p>
        </header >);
    }else{
      return( 
      <header className="Home-header" >
        <img src={logo} className="Home-logo" alt="logo" />
          <p>
            Player: {player[0].player}
          </p>
          <p>
            Season: {player[0].season} Gameweek: {player[0].gw}
          </p>
          <p>
            Opponent next gameweek: {player[0].opponent_team}
          </p>
          <p>
            Predicted points for next gameweek: {roundNum(player[0].predicted_points, 2)}
          </p>
      </header >);
    }
    
  };
  
  
  export default Player;
