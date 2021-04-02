import React, { useState }from 'react'
// import useLocalStorageState from 'use-local-storage-state'
import About from './components/About'
import Nav from './components/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect,
} from 'react-router-dom'
// import { storeQuestion } from './components/api'



const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        </Switch>   
      </div>
    </Router>
  )
}
const [title, setTitle] = useState('')
const [question, setQuestion] = useState('')

const Home = () => (
  <div>
    <h1>Home Page</h1>
    
      <form>
        <div>
          <label for="question-title"></label>
          <input
            id="question-title"
            type="text"
            onChange={(event) => setTitle(event.target.value)}
          ></input> 
        </div>
        <div>
          <label for="question-body">
            Question Title
          </label>
          <textarea
            id="question-body"
            name="question-body"
            onChange={(event) => setQuestion(event.target.value)}
          ></textarea>  
        </div>
      </form>
    
  </div>
)

export default App;
