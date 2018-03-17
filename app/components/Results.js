import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import PlayerPreview from './PlayerPreview'
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
            if(results === null){
                this.setState({
                    error: "Something happed! check that both users exist on github",
                    loading: false
                })
            }else{
                this.setState({
                    winner: results[0],
                    loser: results[1],
                    loading: false,
                    error: null
                })
            }
        })
    }

    render(){
        const { error, winner, loser, loading } = this.state
        console.log(winner)

        if(loading){
            return <div className="container">
                <h1>Loading...</h1>
            </div>
        }

        if(error){
            return (
            <div className="container">
                <h1>{error}</h1>
                <Link to="/battle">Go back</Link>
            </div>)
        }

        return (
            <div className="container">
                <div className="battle">
                    <Player label={"winner"}  score={winner.score} profile={winner.profile}/>
                    <Player label={"loser"}  score={loser.score} profile={loser.profile}/>
                </div>
            </div>
        )
    }
}

const Player = (props) => {
    return (
        <div>
            <h1>{props.label}</h1>
            <PlayerPreview avatar={`https://github.com/${props.profile.login}.png?size=200`} username={"sin nombre"}>

            </PlayerPreview>
            <label>{props.score}</label>
            <div>Score: {props.score}</div>
        </div>
    )
}

Player.propTypes = {
    label: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    profile: PropTypes.object.isRequired
}

export default Results