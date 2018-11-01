import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap';

class UpdatePlayer extends Component {

  state = {
    firstname: '',
    lastname: '',
    position: '',
    image: ''
  }

  componentDidMount() {
    this.parseQueryString()

    fetch(`https://rockies-active.herokuapp.com/players/${this.parseQueryString()}`)
      .then(response => response.json())
      .then(playerData => {
        console.log('Player on Update', playerData.player[0])
        this.setState(
          {
            firstname: playerData.player[0].firstname,
            lastname: playerData.player[0].lastname,
            position: playerData.player[0].position,
            image: playerData.player[0].image,
          }
        )
      })
  }

  parseQueryString = () => {
    let url = window.location.href
    console.log('URL', url)
    return url.split('/')[5]
  }

  handleChange = (event) => {
    const target = event.target
    const value = target.value
    const key = target.name

    this.setState(
      { [key]: value }
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch(`https://rockies-active.herokuapp.com/players/${this.parseQueryString()}`, {
      method: 'PUT',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(response => response.json())
      .then(response => response.status = 201 ? console.log('Update Worked!!') : console.log('ERROR'))
  }

  render() {
    return (
      <div className='update-player-page'>
        <div className='back-to-home-navlink'>
          <NavLink to='/'>
            <div className='home-link-on-player-form-page'>
              <Button className='back-to-home-button' color="primary">Home</Button>
            </div>
          </NavLink>
        </div>
        <div className='player-update-container'>
          <form className='update-player-form' onSubmit={this.handleSubmit} >
            <h3>Update Player Info</h3>
            <label htmlFor='player-first-name-label'>Player First Name: </label>
            <input
              type='text'
              name='firstname'
              value={this.state.firstname}
              onChange={this.handleChange}
              placeholder="First name.." />
            <label htmlFor='lastname-label'>Player Last Name: </label>
            <input
              type='text'
              name='lastname'
              value={this.state.lastname}
              onChange={this.handleChange}
              placeholder="Last name.." />
            <label htmlFor='position-label'>Position: </label>
            <input
              type='text'
              name='position'
              value={this.state.position}
              onChange={this.handleChange}
              placeholder="Position.." />
            <label htmlFor='image-label'>Image URL: </label>
            <input
              type='text'
              name='image'
              value={this.state.image}
              onChange={this.handleChange}
              placeholder="Image URL.." />
            <div className='update-form-buttons'>
              <div className='player-update-submit-button'>
                <Button className='update-player-button'
                  color="success"
                  type='submit'
                  name='submit'
                  value='Add Player'>Update</Button>
              </div>
              <div>
                <NavLink to='/'>
                  <div className='home-link-on-update-page'>
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

export default UpdatePlayer;
