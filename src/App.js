import React from 'react'
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
        <Route path="/Login" component={Login}/>
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

