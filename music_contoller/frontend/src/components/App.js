import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <div className="center">
      <Router>
        <Home />
      </Router>
    </div>
  )
}

export default App

const appDiv = document.getElementById('app');
const root = ReactDOM.createRoot(appDiv);
root.render(<App />);
