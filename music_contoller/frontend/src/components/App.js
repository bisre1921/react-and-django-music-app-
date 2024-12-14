import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App

const appDiv = document.getElementById('app');
const root = ReactDOM.createRoot(appDiv);
root.render(<App />);
