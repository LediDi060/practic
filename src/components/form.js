import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <>
               <form onSubmit={ this.props.weatherMethod}>
                 <input type="text" name="city" placeholder="Введите интересующий вас город" />
                   <button>Найти</button>
                   
                   
                </form> 
            </>
        )
    }
}
