import './App.css'

import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'

import Home from './components/Home'
import NotFound from './components/NotFound'
import About from './components/About'

const App = () => (
  <div className="app-container">
    <Header />
    <div className="app-body">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
