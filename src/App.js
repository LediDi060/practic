import React, { Component } from 'react'
import Form from './components/form'
import Info from './components/info'
import Weather_info from './components/WeatherInfo'

const API_KEY= '64c2778862b9875aebf0934ece81afe9';
export default class App extends Component {
state={
  temp:undefined,
  city:undefined,
  country:undefined,
  sunrise:undefined,
  sunset:undefined,
  weather:undefined,
  description:undefined,
  error:undefined
} 
// console.log(city)
  getWeather = async (e)=>
  { 
    e.preventDefault();
    
    let city= e.target.elements.city.value
    const api_url= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=ru`)
    const data = await api_url.json()
    console.log(data)
 
    this.setState({
      temp:data.main.temp,
      city: data.name,
      country:data.sys.country,
      sunrise:data.sys.sunrise,
      sunset:data.sys.sunset,
      weather:data.weather[0].main,
      description:data.weather[0].description,
      error:""
    });
  }
  render() {
    return (
      <>
    
         <Info/>
         <Form weatherMethod={this.getWeather}/> 
         <Weather_info
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          weather={this.state.weather}
          description={this.state.description}
          error={this.state.error}
          > </Weather_info>
      </>
    )
  }
}

