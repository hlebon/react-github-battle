import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Popular from './Popular'
import Home from './Home'
import Battle from './Battle'
import Results from './Results'
import Nav from './Nav'

class App extends Component{
    render(){
        return (
            <BrowserRouter>
                <div className="container">
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/battle" component={Battle}/>
                        <Route path="/popular" component={Popular}/>
                        <Route path="/battle/results" component={Results}/>
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
