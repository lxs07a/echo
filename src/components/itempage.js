import React, {Component} from 'react';
import { ReactMic } from 'react-mic';
import './itempage.css';
import axios from 'axios'
import RecordingBox from './recordingbox.js'
var usersRecordings = []

class ItemPage extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      username: this.props.username,
      record: false,
      button1active: "active",
      button2active: "",
      recordings: []
    }
    this.onStop = this.onStop.bind(this)
  }

  

  componentDidMount() {
    axios.post('http://localhost:8080/audio/recordings', {
      username: this.props.username,
      audioname: this.props.audioObject[0].name,
      withCredentials: true
    })
      .then(response => {
          console.log("list of recordings from backend is " + response)
          if (response.status === 200) {
              // update state
              var usersRecordings = this.state.recordings
              usersRecordings.push(response.data)
              console.log("usersRecordings is " + usersRecordings)
              this.setState({
                  recordings: usersRecordings
              })
          }
      }).catch(error => {
          console.log(error)
          
      })
  }


  startRecording = () => {
    this.setState({
      record: true,
      button2active: "active",
      button1active: ""
    });
  }

  stopRecording = () => {
    this.setState({
      record: false,
      button1active: "active",
      button2active: ""
    });
  }
 
  onStop(recordedBlob) {
    var fd = new FormData()

    fd.append("upl", recordedBlob.blob)
    fd.append("author", this.props.username)
    fd.append("name", this.props.audioObject[0].name)
    fd.append("withCredentials", true)

    //send the recording and author to backend to store in the user's database
    axios.post('http://localhost:8080/audio/itempage', fd
      )
      .then(response => {
          console.log('recording sent to backend ')
          console.log("response is " + response)
          if (response.status === 200) {
              // update state
              var newRecordings = this.state.recordings[0]
              newRecordings.push(response.data)
              console.log("newRecordings is " + newRecordings)
              this.setState({
                  recordings: newRecordings
              })
              console.log("this.state.recordings is " + this.state.recordings)
          }
      }).catch(error => {
          console.log('login error: ')
          console.log(error);
          
      })
  }

  render () {
    var Recordings
    if(typeof this.state.recordings[0] != "undefined") {
      var typeofrec = typeof this.state.recordings[0]
      console.log(typeofrec)
     Recordings = this.state.recordings[0].map((recording) => {
      return (<RecordingBox 
        timedate={recording.timedate} 
        audiopath={recording.audiopath}/>)
    })
  }
    return (
      <div className = "container">
        <div className="row track-item">
          <div className="col-lg-8">
            <h5><strong>{this.props.audioObject[0].name}</strong></h5>
            <p>{this.props.audioObject[0].text}</p>
            <audio controls controlsList="nodownload">
              <source src={this.props.audioObject[0].audiopath} type="audio/mpeg"/>
              the browser is freaking out
            </audio>
          </div>
          <h5>Your {this.props.audioObject[0].name}</h5>
          {Recordings}
          <div>
            <ReactMic
              record={this.state.record}
              className="sound-wave"
              onStop={this.onStop}
              strokeColor="#000000"
              backgroundColor="#FF4081" />
            <div>
              <div className="buttondiv">
                <button className={`micbutton ${this.state.button1active}`} onClick={this.startRecording} type="button">
                  <div>
                    <div className="insidemicbutton">
                      <svg className="mic" viewBox="0 0 24 24">
                        <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
              <div className="buttondiv">
                <button className={`micbutton ${this.state.button2active}`} onClick={this.stopRecording} type="button"><div>
                    <div className="insidemicbutton">
                      <svg className="mic" viewBox="0 0 24 24">
                        <path d="M6 6h12v12H6z"></path>                      
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ItemPage