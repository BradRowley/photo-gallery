import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import BestSportMoment from './components/BestSportMoment'
import UCF from './components/UCF'

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Welcome to my SPA</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Go Home</Link>
              </li>
              <li>
                <Link to="/1">Best Sports Moments</Link>
              </li>
              <li>
                <Link to="/2">UCF</Link>
              </li>
              <li>
                <Link to="/3">Page 3</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route exact path="/1">
            <BestSportMoment />
          </Route>
          <Route exact path="/2">
            <UCF />
          </Route>
          <Route exact path="/3">
            Page 3
          </Route>
          <Route path="*">Not Found</Route>
        </Switch>
      </>
    )
  }
}

export default App
