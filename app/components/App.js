import React, { Component } from 'react'
import Popular from './Popular'
import Home from './Home'
import Battle from './Battle'
import { Route, BrowserRouter } from 'react-router-dom'
import Nav from './Nav'

class App extends Component{
    render(){
        return (
            <BrowserRouter>
                <div className="container">
                    <Nav />
                    <Route path="/popular" component={Popular}/>
                    <Route path="/" component={Home}/>
                    <Route path="/battle" component={Battle}/>
                </div>
            </BrowserRouter>
            
        )
    }
}

export default App
