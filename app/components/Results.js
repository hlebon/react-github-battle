import React, { Component } from 'react'
import queryString from 'query-string'
import * as api from '../utils/api'

class Results extends Component{
    state = {
        winner: null,
        loser: null,
        error: null,
        loading: true
    }


    componentDidMount(){
        const players = queryString.parse(this.props.location.search)
        api.battle([
            players.playerOneName,
            players.playerTwoName
        ]).then((results) => {
            console.log("20", results)
        })
    }

    render(){
        const { error, winner, loser, loading } = this.state
        return (
            <div>Working on it!!</div>
        )
    }
}

export default Results