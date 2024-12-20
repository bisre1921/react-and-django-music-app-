import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'

const App = () => {
  return (
    <div className="center">
      <Home />
    </div>
  )
}

export default App

const appDiv = document.getElementById('app');
const root = ReactDOM.createRoot(appDiv);
root.render(<App />);
