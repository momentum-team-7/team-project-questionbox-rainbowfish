import React from 'react'
// import useLocalStorageState from 'use-local-storage-state'
import About from './About'
import Nav from './Nav'
import {
  BroswerRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'

function App() {
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
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
