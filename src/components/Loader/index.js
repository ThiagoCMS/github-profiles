import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import ThemeContext from '../../context/ThemeContext';

const LoaderContainer = styled.div`
  align-items: center;
  background-color: ${(props) => (props.theme === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(210, 12%, 12%)')};
  display: flex;
  height: calc(100vh - 53px - 40px);
  justify-content: center;
  width: 100vw;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoaderSpinner = styled.span`
  animation: ${rotate} 1.5s ease infinite;
  border: 10px solid lightgrey;
  border-radius: 50%;
  border-top: 10px solid grey;
  height: 150px;
  width: 150px;
`;

function Loader() {
  const { state: { theme } } = useContext(ThemeContext);

  return (
    <LoaderContainer theme={theme}>
      <LoaderSpinner />
    </LoaderContainer>
  );
}

export default Loader;
