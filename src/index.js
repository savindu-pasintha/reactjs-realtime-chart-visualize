import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import ReactHookUsage from './ReactHookUsage'
import Carosal from './carosal/Carosal'
import Home from './charts/Home'
import Lazy from './lazy-loading/Home'
import Project from './page-routing-handle-public-private-protected/Project'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
    {/**<Home  /><App />  <ReactHookUsage />   <Carosal /> <Home />  <Lazy />*/}
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
