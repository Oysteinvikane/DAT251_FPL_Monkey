import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  background:#f3f0e6
  margin:80px 0px 0px 0px
`; 
export const Player = () => (
  <GridWrapper >
    <h2>Player Page</h2>
    <p>Player name: {this.state.playerName}</p>
  </GridWrapper>
)