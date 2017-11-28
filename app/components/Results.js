import React, { Component } from 'react'
import queryString from 'query-string'
import * as api from '../utils/api'

class Results extends Component{
    componentDidMount(){
        const players = queryString.parse(this.props.location.search)
        api.battle([
            players.playerOneName,
            players.playerTwoName
        ]).then((results) => {
            console.log("12", results)
        })
    }

    render(){
        
        return (
            <div>Results!</div>
        )
    }
}

export default Results