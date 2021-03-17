import React from 'react';
import logo from './logos/fplm_logo.png';
import './Home.css'

export const Home = (props) => (

<header className="Home-header">
    <img src={logo} className="Home-logo" alt="logo" />

    <p>
        Welcome to FPLMonkeys score predicter for Premier leagues Fantasy Footbal!
    </p>
    <p>
        Begin by searching up players at the top!
    </p>
</header>
)