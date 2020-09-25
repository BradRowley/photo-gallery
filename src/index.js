import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.scss'
import App from './App'
import photo from './photo.json'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
