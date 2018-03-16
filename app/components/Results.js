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
            console.log("results: ", results)
            this.setState({
                winner: results[0],
                loser: results[1],
                loading: false
            })
        })
    }

    render(){
        const { error, winner, loser, loading } = this.state
        return (
            <div className="container">
            { loading ? <h1>Loading...</h1>
            :
            <div className="battle">
                <Player1 player={winner}/>
                <Player2 player={loser}/>
            </div> }
            </div>
        )
    }
}

const Player1 = (props) => {
    return (
        <div className="battle-card">
            <h2>You win!</h2>
            <img src={`https://github.com/${props.player.profile.login}.png?size=200`} alt="img"/>
            <label>{props.player.profile.name}</label>
            <div>Score: {props.player.score}</div>
        </div>
    )
}

const Player2 = (props) => {
    return (
        <div className="battle-card">
            <h2>You lose</h2>
            <img src={`https://github.com/${props.player.profile.login}.png?size=200`} alt="img"/>
            <label>{props.player.profile.name}</label>
            <div>Score: {props.player.score}</div>
        </div>
    )
}

export default Results