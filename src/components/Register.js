import React, { useState } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import useLocalStorageState from 'use-local-storage-state'

export default function Registration() {
    const [password, setPassword] = useState('')
    const [username, setUsername] = useLocalStorageState('username', '')
    const [token, setToken] = useLocalStorageState('token', '')

    function setAuth(username, token) {
        setUsername(username)
        setToken(token)
      };

      const isLoggedIn = username && token 



    function handleSubmit(event) {
        event.preventDefault()
        axios
            .post('http://questionbox-torpedo-shark.herokuapp.com/auth/users/', {
                username,
                password,
            })
            .then((response) => {
                return axios 
                .post('http://questionbox-torpedo-shark.herokuapp.com/auth/token/login', {
                    username,
                    password,
                })
                .then((data) => {
                    if (data && data.data.auth_token) {
                        setAuth(username, data.data.auth_token)
                    }
                })
            })
    }

    return (
        <div>
            <p style={isLoggedIn ? { display: 'none' } : {}}>Register Here:</p>
            <p style={isLoggedIn ? {} : { display: 'none' }}>Log Out to Register a New Account.</p>
            <form onSubmit={handleSubmit} style={isLoggedIn ? { display: 'none' } : {}}>
                <div>
                    <label to='username'>Username:</label>
                    <input 
                    type='text'
                    id='username'
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    />
                </div>

                <div>
                    <label>Password:</label>
                    <input  
                    type='password'
                    id='password'
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    />
                </div>


                <button type='submit'>Register</button>
            </form>
            
        </div>
    )
}