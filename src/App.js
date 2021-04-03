import React from 'react'
import About from './components/About'
import Nav from './components/Nav'
import Home from './components/Home'
import GenreQuestions from './components/GenreQuestions'
import QuestionAnswers from './components/Answers'
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
        <Route path="/GenreQuestions" component={GenreQuestions} />
        <Route path="/Answers" component={QuestionAnswers} />
        
        </Switch>   
      </div>
    </Router>
    
  )
}



export default App;

