import React, { useContext } from 'react';
import styled from 'styled-components';

import UserContext from '../../../context/UserContext';
import ThemeContext from '../../../context/ThemeContext';

const RepositoriesContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template: 100px 100px / 1fr 1fr;

  @media(max-width: 680px) {
    padding: 0 20px;
  }

  @media(max-width: 999px) {
    grid-template: 100px 100px 100px 100px / 1fr;
  }
`;

const RepositoryBox = styled.div`
  border: ${(props) => (props.theme === 'light' ? '1px solid #e1e4e8' : '2px solid hsl(0, 0%, 35%)')};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
`;

RepositoryBox.Name = styled.h3`
  color: ${(props) => (props.theme === 'light' ? '#0366d6' : 'hsl(215, 100%, 60%)')};
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

RepositoryBox.Language = styled.h4`
  color: ${(props) => (props.theme === 'light' ? '#586069' : 'hsl(0, 0%, 70%)')};
  font-weight: 400;
  font-size: 12px;
`;

function Repositories() {
  const { state: { user } } = useContext(UserContext);
  const { state: { theme } } = useContext(ThemeContext);

  return (
    <RepositoriesContainer>
      {user.repos.map((repo) => (
        <RepositoryBox theme={theme} key={repo.id}>
          <RepositoryBox.Name theme={theme} as="a" href={repo.url} target="_blank">{repo.name}</RepositoryBox.Name>
          <RepositoryBox.Language theme={theme}>{repo.language}</RepositoryBox.Language>
        </RepositoryBox>
      ))}
    </RepositoriesContainer>
  );
}

export default Repositories;
