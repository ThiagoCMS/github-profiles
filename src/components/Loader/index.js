import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoaderContainer = styled.div`
  align-items: center;
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
  return (
    <LoaderContainer>
      <LoaderSpinner />
    </LoaderContainer>
  );
}

export default Loader;
