import React, { Component } from 'react'

const apiURL = ('https://rockies-active.herokuapp.com/players')

class PlayerForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    position: ''
  }

  handleChange = (event) => {
    event.preventDefault()
    const key = event.target.name
    const value = event.target.value

    this.setState({
      [key]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(() => this.props.fetchPlayers())
  }

  render() {
    return (
      <div className="form" onSubmit={this.handleSubmit}>
        <h3>Add a Player</h3>
        <div>
          <label htmlFor="player-first-name">Player First Name: </label>
          <input id="player-first-name"
            type="text"
            value={this.state.firstname}
            onChange={this.handleChange}
            name='firstname' />
        </div>
        <div>
          <label htmlFor="player-last-name">Player Last Name: </label>
          <input id="player-last-name"
            type="text"
            value={this.state.lastname}
            onChange={this.handleChange}
            name='lastname' />
        </div>
        <div>
          <label htmlFor="position">Position: </label>
          <input id="position"
            type="text"
            value={this.state.position}
            onChange={this.handleChange}
            name='position' />
        </div>
        <button type="submit">Submit Player</button>
      </div>
    )
  }
}


export default PlayerForm