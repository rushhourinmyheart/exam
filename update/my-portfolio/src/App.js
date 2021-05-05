import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import ContactPage from './pages/ContactPage'
import ApproachPage from './pages/ApproachPage'
import Insights from './components/Insights'

const App = () => {
  return (
    <Router>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/ContactPage' component={ContactPage} exact />
      <Route path='/ApproachPage' component={ApproachPage} exact />
    </Switch>
    </Router>
  )
}

export default App;
