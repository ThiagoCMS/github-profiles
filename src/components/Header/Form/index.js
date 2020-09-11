import React, { useRef } from 'react';

import './Form.css';

function Form() {
  const usernameRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log('Form submit', usernameRef.current.value);
    usernameRef.current.value = '';
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="input" type="text" name="username" id="username" placeholder="Search..." autoComplete="off" ref={usernameRef} />
      <button className="search-button" type="submit">Search</button>
    </form>
  );
}

export default Form;
