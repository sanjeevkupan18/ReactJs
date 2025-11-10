import React from 'react'
import Card from './components/Card';
import Button from './components/Button';
import Input from './components/Input';
import { useWeather } from './context/Weather';
import './App.css'
import { useEffect } from 'react';


const App = ()=>{
  const weather = useWeather();

  useEffect(()=>{
    weather.fetchCurrentLocation()
  },[])

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search"/>
      <Card />
      <Button value ="Refresh" />
    </div>
  )
}

export default App;