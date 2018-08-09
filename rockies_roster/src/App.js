import React, { Component } from 'react';
import logo from './assets/rockiesLogo.png';
import './App.css';
import Header from './components/Header'
import PlayerList from './components/PlayerList'
import PlayerForm from './components/PlayerForm';
const apiURL = ('https://rockies-active.herokuapp.com/players')

class App extends Component {
  state = {
    allPlayers: [],
    gotData: false
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
    const currentPlayers = this.state.allPlayers
    const updatedPlayers = this.state.allPlayers.concat(newPlayer)
    this.setState({
      allPlayers: updatedPlayers
    })
  }

  fetchPlayers = () => {
    fetch(apiURL)
      .then(response => response.json())
      .then(myJSON => {
        this.setState({
          allPlayers: myJSON.players,
          gotData: true
        })
      })
  }

  componentDidMount() {
    this.fetchPlayers()
  }

  render() {
    return (
      <div className="App">
        <Header src={logo} />
        <PlayerForm addPlayerToGlobalState={this.addPlayerToGlobalState}
          fetchPlayers={this.fetchPlayers} />
          {this.state.gotData
            ?
            <PlayerList player={this.state.allPlayers}
              deletePlayer={this.deletePlayer} />
            :
            <h2>Loading, hang tight!</h2>
          }
      </div>
    );
  }
}

export default App;
