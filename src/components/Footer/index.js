import React from 'react';
import styled from 'styled-components';

const FooterBase = styled.footer`
  align-items: center;
  background-color: #24292e;
  display: flex;
  height: 40px;
  justify-content: center;
`;

const Text = styled.p`
  color: #fff;
`;

function Footer() {
  return (
    <FooterBase>
      <Text>
        Made with
        {' '}
        {'</>'}
        {' '}
        by Thiago
      </Text>
    </FooterBase>
  );
}

export default Footer;
