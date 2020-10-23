import React, { Component } from 'react'

export default class WeathezInfo extends Component {
    render() {
        return (
            <>
               <p>Место:{this.props.city} </p>
               <p>Страна: {this.props.country}</p>
              <p>Температура: {this.props.temp-273.15}</p>
              <p>Погода: {this.props.description}</p>
              <p>Восход солнца:{this.props.sunrise}</p>
            <p> Закат солнца: {this.props.sunset}</p>
            
            </>
        )
    }
}
