import React, { Component } from 'react'
import Popular from './Popular'
import Home from './Home'
import Battle from './Battle'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Nav from './Nav'

class App extends Component{
    render(){
        return (
            <BrowserRouter>
                <div className="container">
                    <Nav />
                    <Switch>
                        <Route path="/popular" component={Popular}/>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/battle" component={Battle}/>
                        <Route component={() => {
                            return <h1>Page Not Found</h1>
                        }}/>
                    </Switch>
                </div>
            </BrowserRouter>
            
        )
    }
}

export default App
