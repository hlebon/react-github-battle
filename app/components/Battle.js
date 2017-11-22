import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
        console.log("handleSubmit",id, username)
        let newState = {}
        newState[id + "Name"] = username
        newState[id + 'Image'] = `https://github.com/${username}.png?size=200`
        this.setState(newState)
        

    }

    render(){
        let { playerOneName, playerTwoName } = this.state
        console.log(this.state);
        console.log(playerOneName, playerTwoName)
        return (
            <div>
                <h1>Battle</h1>
                {!playerOneName && <PlayerInput id="playerOne" label="Player One" onSubmit={this.handleSubmit}/>}
                {!playerTwoName && <PlayerInput id="playerTwo" label="Player Two" onSubmit={this.handleSubmit}/>}
            </div>
        )
    }
}

export default Battle