import React, {Component} from 'react';
import AudioRecorder from 'react-audio-recorder';

class AudioBox extends Component {

  // state = {
  //   quantity: 1
  // }

  render () {

    // var addFood = () => {
    //   var theFoodObject = {
    //     name: this.props.name,
    //     image: this.props.image,
    //     calories: this.props.calories,
    //     quantity: this.state.quantity
    //   }
    //   this.props.addFood(theFoodObject)
    // }

    // var adjustQuantity = (event) => {
    //   var inputChange = {}
    //   inputChange[event.target.name]=event.target.value
    //   this.setState(inputChange)
    // }

    return (
      <div className = "container">
        <div className="row track-item">
          <div className="col-lg-8">
            <p>{this.props.name}</p>
            <audio controls controlsList="nodownload">
              <source src={this.props.audiopath} type="audio/mpeg"/>
              the browser is freaking out
            </audio>
            <AudioRecorder/>
          </div>
        </div>
      </div>

      /* <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src= {this.props.image} />
              </figure>
            </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{this.props.name}</strong> <br />
              <small>{this.props.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input onChange={adjustQuantity}
                className="input"
                type="number" 
                name="quantity"
                value={this.state.quantity}
              />
            </div>
            <div className="control">
              <button onClick={addFood} className="button is-info">
                +
              </button>
            </div>
          </div>
        </div>
        </article>
      </div> */
    )
  }
}
export default AudioBox