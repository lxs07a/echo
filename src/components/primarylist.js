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

    var AudioBoxes = this.state.audios
    .filter((audio)=> 
      audio.name.toLowerCase().includes(this.state.search.toLowerCase()) 
    )
    .map((audio) =>
      <AudioBox 
        //addFood={this.addFoodsToday} 
        name={audio.name} 
        //text={audio.text} 
        audiopath={audio.audiopath}/>
    )

    return (

      <div className="App columns">
        <section className="audioboxes column">
          <br/>
          <h1><b>Tongue Twisters</b></h1>
          <br></br>
          <span>Search tongue twisters: </span><input onChange={this.handleChange} name="search" placeholder={this.state.search}/>
            {/* <button onClick={this.toggleModal} className="button is-primary is-small modal-button" data-target="modal" aria-haspopup="true">Add Food</button>
            <div className= {classNames}>
              <div className="modal-background"></div>
                <div className="modal-content">
                  <input name="name" onChange={this.handleAdd}  placeholder={this.state.name}/>
                  <input name="image" onChange={this.handleAdd}  placeholder={this.state.image}/>
                  <input name="calories" onChange={this.handleAdd}  placeholder={this.state.calories}/>
                </div>
              <button onClick={this.toggleModal} className="modal-close is-large" aria-label="close"></button>
              <button onClick={this.addIt} className="button is-primary is-large modal-button" data-target="modal" aria-haspopup="true">Add Food</button>
            </div> */}
          {AudioBoxes}
        </section>
        {/* <section className="selectedfood column">
          <br/>
          <h1><b>Today's Food</b></h1>
          <br/>
            <ul>
              {foodiesOfToday}
            </ul>
            <p><b>Total: </b>{this.state.total} cal</p>
        </section> */}
      </div>
    )
  }
}

export default Primarylist
