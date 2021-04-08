import React, { useState, useEffect } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import axios from 'axios'
import About from './components/About'
import Nav from './components/Nav'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import GenreQuestions from './components/GenreQuestions'
import QuestionAnswers from './components/Answers'
import UserProfile from './components/UserProfile'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';



  function App() {
    const [username, setUsername] = useLocalStorageState('username', '')
    const [token, setToken] = useLocalStorageState('token', '')
    const [selectedGenre,setSelectedGenre] = useState('')
    const [questions, setQuestions] = useState([])

    useEffect(() => {
    axios.get(`https://questionbox-torpedo-shark.herokuapp.com/questions/`).then((response) => {
        
        setQuestions(response.data)
        
        
    })}, [])


    function setAuth(username, token) {
      setUsername(username)
      setToken(token)
    };
  
    function logOut() {
      setUsername(null)
      setToken(null)
    }
  
    const isLoggedIn = username && token 


  return (
    <Router>
      
      <div className="App">
        <header>
          <h1 id="title">What <i><b>NOW</b></i>?</h1>
          <Nav />
        </header>
        
        <Switch>
        <Route path="/" exact>
        <Home setSelectedGenre={setSelectedGenre}/>
          </Route>
        <Route path="/about" component={About}  />
        <Route path="/Login" component={Login}>
          <Login  setAuth={setAuth} isLoggedIn={isLoggedIn} token={token} username={username} logOut={logOut} setUsername={setUsername} />
        </Route> 

        <Route path="/GenreQuestions" >
          <GenreQuestions questions={questions} token={token} selectedGenre={selectedGenre} />
          </Route>

        <Route path="/Register">
          <Register setAuth={setAuth} isLoggedIn={isLoggedIn} token={token} username={username} logOut={logOut} setUsername={setUsername} />
        </Route>

        
        <Route path="/Answers" component={QuestionAnswers} />
        <Route path="/UserProfile" component={UserProfile} />
        
        </Switch>   
      </div>
    </Router>
    
  )
}



export default App;

