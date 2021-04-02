import React from 'react'
import About from './components/About'
import Nav from './components/Nav'
import Home from './components/Home'

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
        {/* <Route path="/:id" component={Genre} /> */}
        <Route path="/about" component={About}  />
        
        </Switch>   
      </div>
    </Router>
    
  )

}


export default App;

