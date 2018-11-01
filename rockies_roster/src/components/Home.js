import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap';
import PlayerList from './PlayerList'
const apiURL = ('https://rockies-active.herokuapp.com/players')

class Home extends Component {
  state = {
    allPlayers: [],
    gotData: false
  }
  fetchPlayers = () => {
    fetch(apiURL)
      .then(response => response.json())
      .then(myJSON => {
        console.log('Players', myJSON)
        this.setState({
          allPlayers: myJSON.players,
          gotData: true
        })
      })
  }

  deletePlayer = (event, playerId) => {
    console.log('PLAYER ID', playerId)
    event.preventDefault()
    fetch('https://rockies-active.herokuapp.com/players/' + playerId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const currentPlayers = this.state.allPlayers
    const filteredPlayers = currentPlayers.filter(player => {
      return player.id !== playerId
    })
    this.setState({
      allPlayers: filteredPlayers
    })
  }

  addPlayerToGlobalState = (newPlayer) => {
    const updatedPlayers = this.state.allPlayers.concat(newPlayer)
    this.setState({
      allPlayers: updatedPlayers
    })
  }

  componentDidMount() {
    this.fetchPlayers()
  }

  render() {
    return (
      <div className='home-page'>
        <NavLink to='/playerform'>
          <div>
            <Button className='add-player-button' color='primary'>Add New Player</Button>
          </div>
        </NavLink>
        {this.state.gotData
          ?
          <PlayerList player={this.state.allPlayers}
            deletePlayer={this.deletePlayer} />
          :
          <h2>Loading Players, Hang Tight!</h2>
        }
      </div>
    )
  }
}

export default Home;