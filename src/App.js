import React from 'react'
import useLocalStorageState from 'use-local-storage-state'
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

    function setAuth(username, token) {
      setUsername(username)
      setToken(token)
    };

    const setAuthTest = () => {
      console.log('test')
    };

    // function setAuthTest() {
    //   console.log('test')
    // }

    const isLoggedIn = username && token 


  return (
    <Router>
      
      <div className="App">
        <header>
          <h1 id="title">What <i><b>NOW</b></i>?</h1>
          <Nav />
        </header>
        
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About}  />
        <Route path="/Login" render={({ setAuth, isLoggedIn, token, setAuthTest }) => (
    <Login setAuth={setAuth} setAuthTest={setAuthTest} isLoggedIn={isLoggedIn} token={token} />
  )}/>
          
        <Route path="/Register" component={Register}/>
        <Route path="/GenreQuestions" component={GenreQuestions} />
        <Route path="/Answers" component={QuestionAnswers} />
        <Route path="/UserProfile" component={UserProfile} />
        
        </Switch>   
      </div>
    </Router>
    
  )
}



export default App;

