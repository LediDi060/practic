import React, { Component } from 'react'
import { Icon } from '../styles'


export default class WeathezInfo extends Component {
    constructor(props){
        super(props)
    }

    

    render() {
        return (
            <>
                <Icon>
                    <img src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`} /> 
                  
                </Icon>
                <p>Место:{this.props.city} </p>
                <p>Код страны: {this.props.country}</p>
                <p>Температура: {Math.round(this.props.temp - 273.15)} °C</p>
                <p>Погода: {this.props.description}</p>
                <p>Восход солнца: {this.props.sunrise}</p>
                <p> Закат солнца: {this.props.sunset}</p>

            </>
        )
    }
}
