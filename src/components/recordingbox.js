import React, {Component} from 'react';

class RecordingBox extends Component {
  debugger
  //prettify timeDate
  //var timeDate = this.props.timedate
  render () {
    return (
      <div className = "container">
        <div className="row track-item">
          <div className="col-lg-8">
            <p>{this.props.timedate}</p>
            <audio controls controlsList="nodownload">
              <source src={"http://localhost:8080/uploads/" + this.props.audiopath}/>
              the browser is freaking out
            </audio>
          </div>
        </div>
      </div>
    )
  }
}
export default RecordingBox