import React, {Component} from 'react';
import logo from './logos/fplm_logo.png';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { Player } from './Player';
import { NoMatch } from './NoMatch';

class App extends Component {
 
    state = {};
 /*
    componentDidMount() {
        setInterval(this.hello, 250);
    }
 
    hello = () => {
        fetch('/api/hello')
            .then(response => response.text())
            .then(message => {
                this.setState({message: message});
            });
    };

    /*
  "proxy": "http://localhost:8080",
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],*/
 
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
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">{this.state.message}</h1>
                <p>
                    Edit <code>src/App.js</code> and save to reload. You should be able to see the changes straight away.
                </p>
                </header>
            </div>
        );
    }
}
 
export default App;
