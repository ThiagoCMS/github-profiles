import React, { useContext } from 'react';

import Repositories from './Repositories';
import UserContext from '../../context/UserContext';
import './Profile.css';

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <section className="profile">
      {user && user.name
      && (
      <>
        <div className="profile-info">
          <img className="profile-img" src={user && user.avatar_url} alt="" />
          <h2 className="profile-name">{user && user.name}</h2>
          <h3 className="profile-username">{user && user.login}</h3>
          <p className="profile-count">
            {' '}
            <span className="counter">{user && user.followers}</span>
            {' '}
            followers -
            {' '}
            <span className="counter">{user && user.public_repos}</span>
            {' '}
            repositories
          </p>
        </div>
        <Repositories className="repositories" />
      </>
      )}
    </section>
  );
}

export default Profile;
