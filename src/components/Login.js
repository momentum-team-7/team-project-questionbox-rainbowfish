import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import useLocalStorageState from 'use-local-storage-state'

function Login ({isLoggedIn, token, setAuth, username, logOut, setUsername}) {

  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')


  // if (isLoggedIn) {
  //   return <Redirect to='/' />
  // }
  
//   setAuthTest();
// const setAuth1  = () => {
//     setAuthTest()
// }

  function handleSubmit (event) {
    // setAuth1()
    event.preventDefault()
    axios
      .post('http://questionbox-torpedo-shark.herokuapp.com/auth/token/login', {
        username: username,
        password: password
      })
      .then((data) => {
        if (data && data.data.auth_token) {
          setAuth(username, data.data.auth_token)
        }
      })
      .catch((error) => {
        setErrors(error.message)
      })
  }
  return (
    <div>
      <p style={isLoggedIn ? { display: 'none' } : {}}>Login</p>
      <p style={isLoggedIn ? {} : { display: 'none' }}>Logout</p>
      <button onClick={() => logOut()} style={isLoggedIn ? {} : { display: 'none' }}>Logout!</button>
      <form onSubmit={handleSubmit} style={isLoggedIn ? { display: 'none' } : {}}>
        {errors && <p>{errors}</p>}
  <div>
    <label to='username'>
      Username
    </label>
    <input
      type='text'
      id='username'
      required
      value={username}
      onChange={(event) => setUsername(event.target.value)}
    />
  </div>

  <div>
    <label to='password'>
      Password
    </label>
    <input
      type='text'
      id='password'
      required
      value={password}
      onChange={(event) => setPassword(event.target.value)}
    />
    <button type='submit'>Log in</button>

  </div>

      </form>

    </div>
  )
}

export default Login