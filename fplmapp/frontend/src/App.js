import React, {Component} from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar.js';
import { Home } from './Home';
import { Player } from './Player';
import { NoMatch } from './NoMatch';


class App extends Component {
    constructor() {
        super();
        this.state = {};    
      }

      callback = (name) => {
        this.setState(
            {playerName: name}, 
            function () {console.log("Playername: " + this.state.playerName)}
        );
    }
 
    fetchPlayer = (name) => {
        console.log(name)
        const encodedvalue = encodeURIComponent(name)
        console.log('trying to get info...')
        fetch('/flask/playerPP?name=' + encodedvalue)
        .then(response => response.json())
        .then(message => {
        this.setState(...message);
        console.log(this.state)
      });
    }
    

    

    render() {
        return (          
            <div>
                <React.Fragment>
                    <Router>
                        <NavigationBar parentCallback={this.fetchPlayer} />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/player" render={(props) => <Player player={this.state} />} />
                            <Route component={NoMatch} />
                        </Switch>
                    </Router>
                </React.Fragment>
                <h1 className="App-title">{this.state.message}</h1>
            </div>
        );
    }
}


 
export default App;
