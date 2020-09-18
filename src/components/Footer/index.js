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
  display: inline-block;
`;

function Footer() {
  return (
    <FooterBase>
      <Text>
        Made with
        {' '}
        {'</>'}
        {' '}
        by
        {' '}
        <Text as="a" href="https://github.com/ThiagoCMS" target="_blank">Thiago</Text>
      </Text>
    </FooterBase>
  );
}

export default Footer;
