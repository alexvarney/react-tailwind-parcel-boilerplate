import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

window.addEventListener('load', event => {
  const element = document.getElementById('app');
  ReactDOM.render(<App />, element);
})



