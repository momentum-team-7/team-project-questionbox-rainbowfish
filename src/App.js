import React from 'react'
import About from './components/About'
import Nav from './components/Nav'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import GenreQuestions from './components/GenreQuestions'
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
        <Nav />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About}  />
        <Route path="/Login" component={Login}/>
        <Route path="/Register" component={Register}/>
        <Route path="/GenreQuestions" component={GenreQuestions} />
        
        </Switch>   
      </div>
    </Router>
    
  )
}



export default App;

