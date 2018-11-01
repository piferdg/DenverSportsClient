import React, { Component } from 'react';
import rockiesBaseballLogo from './assets/Rockies_Official_Logo.png'
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from './components/Header'
import PlayerForm from './components/PlayerForm'
import UpdatePlayer from './components/UpdatePlayer'
import Footer from './components/Footer'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Header src={rockiesBaseballLogo} />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/playerform' component={PlayerForm} exact />
            <Route path='/player/update/:id' component={UpdatePlayer} exact />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
