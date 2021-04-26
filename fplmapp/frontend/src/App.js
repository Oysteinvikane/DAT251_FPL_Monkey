import React, {Component} from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { Player } from './Player';
import { NoMatch } from './NoMatch';

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
                            <Route path="/player" render={(props) => <Player name = 'Harry Kane' />} />
                            <Route component={NoMatch} />
                        </Switch>
                    </Router>
                </React.Fragment>
            </div>
        );
    }
}
 
export default App;
