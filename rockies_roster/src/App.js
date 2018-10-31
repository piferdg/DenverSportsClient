import React, { Component } from 'react';
import logo from './assets/rockiesLogo.png';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from './components/Header'
import PlayerForm from './components/PlayerForm'
import Footer from './components/Footer'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Header src={logo} />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/playerform' component={PlayerForm} exact />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
