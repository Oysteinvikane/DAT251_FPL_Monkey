import React, {Component} from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { Player } from './Player';
import { NoMatch } from './NoMatch';
import { CountdownClock} from './components/CountdownClock'

class App extends Component {
 
    state = {};
    

    render() {
        return (
            
            

            <div className="App">
                <React.Fragment>
                    <Router>
                        <NavigationBar />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/player" component={Player} />
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
