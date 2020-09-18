import React, { useContext, useRef } from 'react';
import styled from 'styled-components';

import { getUser, getRepos } from '../../../services/user';
import UserContext from '../../../context/UserContext';

const FormInput = styled.input`
  background-color: hsla(0,0%,100%,.125);
  border: none;
  border-radius: 6px;
  color: #fff;
  font-weight: 400;
  height: 28px;
  margin-right: 5px;
  padding: 0 3px;
  width: 272px;

  :focus {
    outline: none;
  }

  @media(max-width: 440px) {
    width: 50vw;
  }
`;

const FormButton = styled.button`
  background-color: hsla(0,0%,100%,.125);
  border: none;
  border-radius: 6px;
  color: #fff;
  height: 28px;
  width: 75px;
`;

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
    <form onSubmit={handleSubmit}>
      <FormInput type="text" name="username" id="username" placeholder="Search..." autoComplete="off" ref={usernameRef} />
      <FormButton type="submit">Search</FormButton>
    </form>
  );
}

export default Form;
