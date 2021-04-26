import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  background:#f3f0e6
  margin:80px 0px 0px 0px
`; 

export const Player = ({name}) => {
  const [msg, setMsg] = useState('');

    const encodedvalue = encodeURIComponent(name)
    fetch('playerpp?name=' + encodedvalue)
    .then(response => response.text())
    .then(message => {
    setMsg(message);
    console.log("loaded")
  });

  return(
    
    <GridWrapper >
      <h2>{msg}</h2>
    </GridWrapper>
  );
  }