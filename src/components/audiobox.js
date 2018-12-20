import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class AudioBox extends Component {

  // state = {
  //   quantity: 1
  // }

  render () {
    const loggedIn = this.props.loggedIn

    return (
      <div className = "container">
        {loggedIn ? (
          <Link to={'/itempage/'+ this.props.name} name={this.props.name} username={this.props.username} audiopath={this.props.audiopath}>
            <div className="row track-item">
              <div className="col-lg-12">
                <p>{this.props.name}</p>
                <audio controls controlsList="nodownload">
                  <source src={this.props.audiopath} type="audio/mpeg"/>
                  the browser is freaking out
                </audio>
              </div>
            </div>
          </Link>
        ) : (
          <div className="row track-item">
              <div className="col-lg-12">
                <p>{this.props.name}</p>
                <audio controls controlsList="nodownload">
                  <source src={this.props.audiopath} type="audio/mpeg"/>
                  the browser is freaking out
                </audio>
              </div>
            </div>
          )}
      </div>
    )
  }
}
export default AudioBox