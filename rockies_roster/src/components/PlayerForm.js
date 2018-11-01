import React, { Component } from 'react'
import { Button, Alert } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const apiURL = ('https://rockies-active.herokuapp.com/players')

class PlayerForm extends Component {
  state = {
    post: {
      firstname: '',
      lastname: '',
      position: '',
      image: ''
    },
    gotData: false
  }

  handleChange = (event) => {
    const key = event.target.name
    const value = event.target.value

    this.setState(
      { ...this.state, post: { ...this.state.post, [key]: value } }
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch(apiURL, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(this.state.post)
    })
      .then(response => response.json())
      .then(response => response.status = 201 ? this.setState({ gotData: true }) : console.log('Error Posting'))
      .then(setTimeout(function () {
        this.setState({ gotData: false });
      }.bind(this), 5000
      ))

    event.target.reset()
  }

  render() {
    return (
      <div className='player-form-page'>
        {this.state.gotData
          ?
          <Alert color="success">
            Your player has been added!
          </Alert>
          :
          null
        }
        <NavLink to='/'>
          <div className='home-button-player-form-page'>
            <Button className='home-link-button' color='primary'>Home</Button>
          </div>
        </NavLink>
        <div className='player-form-container'>
          <form className='player-form' onSubmit={this.handleSubmit}>
            <h3>Add a Player</h3>
            <label htmlFor="player-first-name-label">Player First Name: </label>
            <input id="player-first-name"
              type="text"
              value={this.state.firstname}
              onChange={this.handleChange}
              placeholder='First name..'
              name='firstname' />
            <label htmlFor="player-last-name-label">Player Last Name: </label>
            <input id="player-last-name"
              type="text"
              value={this.state.lastname}
              onChange={this.handleChange}
              placeholder='Last name..'
              name='lastname' />
            <label htmlFor="position-label">Position: </label>
            <input id="position"
              type="text"
              value={this.state.position}
              onChange={this.handleChange}
              placeholder='Position..'
              name='position' />
            <label htmlFor="image-label">Image: </label>
            <input id="image"
              type="text"
              value={this.state.image}
              onChange={this.handleChange}
              placeholder='Image URL..'
              name='image' />
            <div className='new-player-form-buttons'>
              <div className='add-player-button-playerform'>
                <Button className='add-new-player-button'
                  color="success"
                  type='submit'
                  name='submit'
                  value='Add Player'>Add Player</Button>
              </div>
              <div>
                <NavLink to='/'>
                  <div className='home-link-on-playerform-page'>
                    <Button className='back-to-home-button' color="primary">Return Home</Button>
                  </div>
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default PlayerForm