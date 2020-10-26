import React, { Component } from 'react'
import Search from './components/Form'
import Info from './components/info'
import Weather_info from './components/WeatherInfo'
import { Form , Menu} from './styles';

const API_KEY = '64c2778862b9875aebf0934ece81afe9';
export default class App extends Component {
  state = {
    temp: undefined,
    icon: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    weather: undefined,
    description: undefined,
    error: undefined
  }

  async componentDidMount(){
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Krasnodar&appid=${API_KEY}&lang=ru`)
    const data = await api_url.json()
      this.setState({
    temp: data.main.temp,
    icon: data.weather[0].icon,
    city: data.name,
    country: data.sys.country,
    sunrise: new Date(+data.sys.sunrise * 1000).toLocaleTimeString(),
    sunset: new Date(+data.sys.sunset * 1000).toLocaleTimeString(),
    description: data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1),
    error: ""
  });
  }
  getWeather = async (e) => {
  e.preventDefault();

  let city = e.target.elements.city.value
  const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=ru`)
  const data = await api_url.json()

  this.setState({
    temp: data.main.temp,
    icon: data.weather[0].icon,
    city: data.name,
    country: data.sys.country,
    sunrise: new Date(+data.sys.sunrise * 1000).toLocaleTimeString(),
    sunset: new Date(+data.sys.sunset * 1000).toLocaleTimeString(),
    description: data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1),
    error: ""
  });
  console.log(this.state.icon)
}

render() { 
  return (
    <>
      <Menu>
      <Info />
      <Search weatherMethod={this.getWeather} /> </Menu>
      <Weather_info
        temp={this.state.temp}
        icon={this.state.icon}
        city={this.state.city}
        country={this.state.country}
        sunrise={this.state.sunrise}
        sunset={this.state.sunset}
        description={this.state.description}
        error={this.state.error}
      > </Weather_info>
      
    </>
  )
}
}

