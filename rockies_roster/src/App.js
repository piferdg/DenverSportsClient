import React, { Component } from 'react';
import logo from './assets/rockiesLogo.png';
import './App.css';
import Header from './components/Header'
import Body from './components/Body'
const apiURL = ('https://rockies-active.herokuapp.com/players')

class App extends Component {
  state = {
    allPlayers: [],
    gotData: false
  }

  componentDidMount() {
    fetch(apiURL)
    .then(response => response.json())
    .then(myJSON => {
      this.setState({
        allPlayers: myJSON.players,
        gotData: true
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header src={logo} />
        {this.state.gotData
          ?
          <Body player={this.state.allPlayers} />
          :
          <h2>Loading, hang tight!</h2>
        }
      </div>
    );
  }
}

export default App;
