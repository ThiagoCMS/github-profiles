import React, { useContext, useRef } from 'react';

import { getUser, getRepos } from '../../../services/user';
import UserContext from '../../../context/UserContext';
import './Form.css';

function Form() {
  const usernameRef = useRef();
  const { setUser, setError } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    setUser({});
    setError('');
    const user = await getUser(usernameRef.current.value);
    usernameRef.current.value = '';
    if (user.error) {
      setError(user.error);
      return;
    }
    const repos = await getRepos(user.login);
    if (repos.error) {
      setError(repos.error);
      return;
    }
    user.repos = repos;
    setUser(user);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="input" type="text" name="username" id="username" placeholder="Search..." autoComplete="off" ref={usernameRef} />
      <button className="search-button" type="submit">Search</button>
    </form>
  );
}

export default Form;
