import React, {Component} from 'react';
import config from "../config.json"

class RecordingBox extends Component {
  //prettify timeDate


  render () {
    var timeDate = new Date(this.props.timedate)
    var newTime = timeDate.toLocaleString() 
 
    return (
      <div className = "container">
        <div className="row track-item">
          <div className="col-lg-8">
            <p>{newTime}</p>
            <audio controls controlsList="nodownload">
              <source src={`${config.backendUrl}/uploads/` + this.props.audiopath}/>
              the browser is freaking out
            </audio>
          </div>
        </div>
      </div>
    )
  }
}
export default RecordingBox