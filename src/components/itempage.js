import React, {Component} from 'react';
import { ReactMicPlus } from 'react-mic-plus';

class ItemPage extends Component {
  render () {
    return (
      <div className = "container">
        <div className="row track-item">
          <div className="col-lg-8">
            <p><h3>{this.props.audioObject[0].name}</h3></p>
            <p>{this.props.audioObject[0].text}</p>
            <audio controls controlsList="nodownload">
              <source src={this.props.audioObject[0].audiopath} type="audio/mpeg"/>
              the browser is freaking out
            </audio>
          </div>
        </div>
      </div>
    )
  }
}
export default ItemPage