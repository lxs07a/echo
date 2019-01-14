import React, { Component } from 'react'
import audios from '../audios.json'
import AudioBox from './audiobox.js'

class Primarylist extends Component {
  state = {
    audios: audios,
    search: ''
  }

  handleChange = (event) => {
    this.setState({search: event.target.value}) 
  }

  render() {
    // const loggedIn = this.props.loggedIn;

    var AudioBoxes = this.state.audios
    .filter((audio)=> 
      audio.name.toLowerCase().includes(this.state.search.toLowerCase()) 
    )
    .map((audio) =>
      <AudioBox 
        name={audio.name} 
        audiopath={audio.audiopath}
        loggedIn = {this.props.loggedIn}
        username={this.props.username}
        />
    )

    return (

      <div className="App columns primarylist">
        <section className="audioboxes column">
          <br/>
          <h1 style={{color: "#697279"}}><b>Tongue Twisters</b></h1>
          <br></br>
          <span>Find: </span><input onChange={this.handleChange} name="search" placeholder={this.state.search}/>
          {AudioBoxes}
        </section>
      </div>
    )
  }
}

export default Primarylist
