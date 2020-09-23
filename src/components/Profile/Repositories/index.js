import React, { useContext } from 'react';
import styled from 'styled-components';

import UserContext from '../../../context/UserContext';

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
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
`;

RepositoryBox.Name = styled.h3`
  color: #0366d6;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

RepositoryBox.Language = styled.h4`
  color: #586069;
  font-weight: 400;
  font-size: 12px;
`;

function Repositories() {
  const { state } = useContext(UserContext);
  const { user } = state;

  return (
    <RepositoriesContainer>
      {user.repos.map((repo) => (
        <RepositoryBox key={repo.id}>
          <RepositoryBox.Name as="a" href={repo.url} target="_blank">{repo.name}</RepositoryBox.Name>
          <RepositoryBox.Language>{repo.language}</RepositoryBox.Language>
        </RepositoryBox>
      ))}
    </RepositoriesContainer>
  );
}

export default Repositories;
