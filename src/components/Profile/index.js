import React, { useContext } from 'react';
import styled from 'styled-components';

import Repositories from './Repositories';
import UserContext from '../../context/UserContext';
import ThemeContext from '../../context/ThemeContext';

const ProfileContainer = styled.div`
  background-color: ${(props) => (props.theme === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(210, 12%, 12%)')};
  display: grid;
  gap: 20px;
  grid-template-columns: 3fr 9fr;
  min-height: calc(100vh - 53px - 40px);
  padding: 20px 100px;

  @media(max-width: 680px) {
    grid-template-columns: 1fr;
    padding: 20px 0;
  }
`;

const ProfileInfo = styled.div`
  grid-column: 1 / 2;

  @media(max-width: 680px) {
    justify-self: center;
  }
`;

ProfileInfo.Img = styled.img`
  border-radius: 50%;
  height: 280px;
  margin-bottom: 10px;
  width: 280px;
`;

ProfileInfo.Name = styled.h2`
  color: ${(props) => (props.theme === 'light' ? '#24292e' : 'hsl(0, 0%, 100%)')};
  font-size: 26px;
  font-weight: 600;
  line-height: 1.25;
`;

ProfileInfo.Username = styled.h3`
  color: ${(props) => (props.theme === 'light' ? '#666' : 'hsl(0, 0%, 60%)')};
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  margin-bottom: 10px;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

ProfileInfo.Count = styled.p`
  color: ${(props) => (props.theme === 'light' ? '#666' : 'hsl(0, 0%, 60%)')};
`;

ProfileInfo.Counter = styled.span`
  color: ${(props) => (props.theme === 'light' ? '#24292e' : 'hsl(0, 0%, 90%)')};
  font-weight: 600;
`;

const RepositoriesContainer = styled.div`
  grid-column: 2 / 3;

  @media(max-width: 680px) {
    grid-column: 1 / 2;
  }
`;

function Profile() {
  const { state: { user } } = useContext(UserContext);
  const { state: { theme } } = useContext(ThemeContext);

  return (
    <ProfileContainer theme={theme}>
      {user && user.id
      && (
      <>
        <ProfileInfo>
          <ProfileInfo.Img src={user && user.avatar_url} alt={`${user.name} profile image`} />
          <ProfileInfo.Name theme={theme}>{user && user.name}</ProfileInfo.Name>
          <ProfileInfo.Username as="a" href={user.url} target="_blank" theme={theme}>{user && user.login}</ProfileInfo.Username>
          <ProfileInfo.Count theme={theme}>
            {' '}
            <ProfileInfo.Counter theme={theme}>{user && user.followers}</ProfileInfo.Counter>
            {' '}
            followers -
            {' '}
            <ProfileInfo.Counter theme={theme}>{user && user.public_repos}</ProfileInfo.Counter>
            {' '}
            repositories
          </ProfileInfo.Count>
        </ProfileInfo>
        <RepositoriesContainer>
          <Repositories />
        </RepositoriesContainer>
      </>
      )}
    </ProfileContainer>
  );
}

export default Profile;
