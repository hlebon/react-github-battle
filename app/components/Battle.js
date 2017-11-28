import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function PlayerPreview(props){
    return(
        <div>
            <div>
                <img src={props.avatar} alt={'Avatar for' + props.username}/>
                <h2>@{props.username}</h2>
            </div>
            <button onClick={() => props.onReset(props.id)}>Reset</button>
        </div>
    )
}

PlayerPreview.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    onReset: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
}

class PlayerInput extends Component{
    state = {
        username: ""
    }

    handleChange = (e) =>{
        const value = e.target.value
        this.setState({
            username: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.props.id, this.state.username)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Player</h2>
                    <label>{this.props.label}</label>
                    <div>
                        <input value={this.state.username} onChange={this.handleChange}
                        id="username" placeholder="github username" type="text" autoComplete="off"/>
                    </div>
                    <button type="submit" disabled={!this.state.username}>submit</button>
                </form>
            </div>
        )
    }   
}

PlayerInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
}


class Battle extends Component{
    state = {
        playerOneName : "",
        playerTwoName : "",
        playerOneImage: null,
        playerTwoImage: null
    }

    handleSubmit = (id, username) => {
        let newState = {}
        newState[id + 'Name'] = username
        newState[id + 'Image'] = `https://github.com/${username}.png?size=200`
        this.setState(newState)
    }

    handleReset = (id) => {
        let newState = {}
        newState[id + 'Name'] = ''
        newState[id + 'Image'] = null
        this.setState(newState)
    }

    render(){
        let { playerOneName, playerTwoName, playerOneImage, playerTwoImage } = this.state
        let match = this.props.match
        return (
            <div>
                <div>
                    <h1>Battle</h1>
                    {!playerOneName && <PlayerInput id="playerOne" label="Player One" onSubmit={this.handleSubmit}/>}
                    {playerOneImage !== null && <PlayerPreview 
                                                avatar={playerOneImage} 
                                                username={playerOneName}
                                                onReset={this.handleReset}
                                                id={'playerOne'}/>}

                    {!playerTwoName && <PlayerInput id="playerTwo" label="Player Two" onSubmit={this.handleSubmit}/>}
                    {playerTwoImage !== null && <PlayerPreview 
                                                avatar={playerTwoImage} 
                                                username={playerTwoName}
                                                onReset={this.handleReset}
                                                id={'playerTwo'}/>}
                </div>
                {(playerOneImage && playerTwoImage) 
                && <Link to={{
                    pathname: match.url + '/results',
                    search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}` }}>Battle</Link>}
            </div>
        )
    }
}

export default Battle