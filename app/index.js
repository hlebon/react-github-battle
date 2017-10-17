import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component{
    render(){
        return (
            <div>
                <h1>Hola {this.props.name}</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <App name={"Hans"}/>,
    document.getElementById('app')
);