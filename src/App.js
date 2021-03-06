import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import audios from './audios.json'

// components
import Signup from './components/signup'
import LoginForm from './components/login-form'
import Navbar from './components/navbar'
import Home from './components/home'
import Primarylist from './components/primarylist'
import ItemPage from './components/itempage'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      audios: audios
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    var theState = this.state
    return (
      <div className="App">
   
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* Routes to different components */}
          <Route
          exact path="/"
          render={(props) => {
            return <Home
              loggedIn={this.state.loggedIn}
              username={this.state.username}
            />}
          }
        />
        <Route
          path="/login" 
          render={() => {
            return (
            <LoginForm
              updateUser={this.updateUser}
            />
            )}
          }
     
        />
        <Route
          path="/signup"
          render={() =>
            <Signup
              signup={this.signup}
            />}
        />
        <Route
          path="/primarylist"
          render={(props) => {
            return <Primarylist
              loggedIn={this.state.loggedIn}
              username={this.state.username}
            />}
          }
        />
        <Route
          path="/itempage/:name"
          render={(props) => {
            var audioObject = this.state.audios.filter((audio)=> audio.name === props.match.params.name)
            return <ItemPage
              audioObject={audioObject}
              username={this.state.username}
            />}
          }      
        />
      </div>
    );
  }
}

export default App;
