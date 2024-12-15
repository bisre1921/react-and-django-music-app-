import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'

const App = () => {
  return (
    <Home />
  )
}

export default App

const appDiv = document.getElementById('app');
const root = ReactDOM.createRoot(appDiv);
root.render(<App />);
