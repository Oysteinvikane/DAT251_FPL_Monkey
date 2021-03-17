import React, {Component} from 'react';
import logo from './logos/fplm_logo.png';
import './App.css';
 
class App extends Component {
 
    state = {};
 
    componentDidMount() {
        setInterval(this.countdown, 250);
    }
 
    countdown = () => {
        fetch('/api/countdown')
            .then(response => response.text())
            .then(message => {
                this.setState({message: message});
            });
    };
 
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">{this.state.message}</h1>
                </header>
            </div>
        );
    }
}
 
export default App;
