import React, { useContext } from 'react';

import UserContext from '../../../context/UserContext';
import './Repositories.css';

function Repositories() {
  const { user } = useContext(UserContext);

  return (
    <div className="repositories-container">
      {user.repos.map((repo) => (
        <div className="repository-box" key={repo.id}>
          <h3 className="repository-name">{repo.name}</h3>
          <h4 className="repository-language">{repo.language}</h4>
        </div>
      ))}
    </div>
  );
}

export default Repositories;
