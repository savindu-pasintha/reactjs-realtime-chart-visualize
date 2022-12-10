import React from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './pages/home/Home'
import HomeChartjs from './react-chartjs-charts/Home'
import HomeGoogleCharts from './google-charts/Home'

function App() {
  return (
    <div className="App">
      <HomeChartjs />
      <HomeGoogleCharts />
    </div>
  )
}
// <Home />
export default App
