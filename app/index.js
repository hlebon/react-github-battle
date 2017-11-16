import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const personas = [
    {nombre: "Hans", id: 1,    esAmigo:true},
    {nombre: "Claudia", id: 2, esAmigo:false},
    {nombre: "Itzel", id: 3,   esAmigo:true},
    {nombre: "Daniel", id: 4,  esAmigo:false}
]


class App extends Component{
    render(){
        return (
            <div>
                <div>
                    <h2>Total</h2>
                    {
                        this.props.personas.map( persona =>(
                            <div key={persona.id}>{persona.nombre}</div>
                        ))
                    }
                </div>
                <div>
                    <h2>Amigos</h2>
                    {
                        this.props.personas.filter( persona => persona.esAmigo )
                        .map( amigo =>  <div key={amigo.id}>{amigo.nombre}</div> )
                    }
                </div>
                <div>
                    <h2>No amigos</h2>
                    {
                        this.props.personas.filter( persona => !persona.esAmigo )
                        .map( amigo =>  <div key={amigo.id}>{amigo.nombre}</div> )
                    }
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App personas={personas}/>,
    document.getElementById('app')
);


