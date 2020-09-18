import React from 'react';
import styled from 'styled-components';

import Logo from '../../assets/GitHub-Mark-Light-32px.png';
import Form from './Form';

const HeaderContainer = styled.header`
  align-items: center;
  background-color: #24292e;
  color: #ffffffb3;
  display: flex;
  gap: 10px;
  height: 53px;
  justify-content: flex-start;
  padding: 0 16px;
`;

function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="GitHub Logo" />
      <Form />
    </HeaderContainer>
  );
}

export default Header;
