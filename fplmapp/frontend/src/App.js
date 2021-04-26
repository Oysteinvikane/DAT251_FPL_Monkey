import React, {Component} from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { Player } from './Player';
import { NoMatch } from './NoMatch';


class App extends Component {
    constructor() {
        super();
        this.state = {
          playerName: ""
        };    
      }

      callback = (name) => {
        this.setState(
            {playerName: name}, 
            function () {console.log("Playername: " + this.state.playerName)}
        );
    }
 
    

    

    render() {
        return (          
            <div>
                <React.Fragment>
                    <Router>
                        <NavigationBar name={this.state.playerName} parentCallback={this.callback} />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/player" render={(props) => <Player name={this.state.playerName} />} />
                            <Route component={NoMatch} />
                        </Switch>
                    </Router>
                </React.Fragment>
            </div>
        );
    }
}
 
export default App;
