import React, { Component } from 'react'
import Popular from './Popular'
import { Route, BrowserRouter } from 'react-router-dom'
import Nav from './Nav'

class App extends Component{
    render(){
        return (
            <BrowserRouter>
                <div className="container">
                    <Nav />
                    <Route path="/popular" component={Popular}/>
                </div>
            </BrowserRouter>
            
        )
    }
}

export default App
