import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    state = {
        loggedIn: this.props.loggedIn,
        username: this.props.username
      }


    render() {

        return (
            <div className="home">
                        {/* greet user if logged in: */}
                        {this.state.loggedIn &&
                            <p>Ready to twist your tongue, {this.state.username}?</p>
                        }
                        <br></br>
                <button type="button" class="btn btn-secondary">
                    <Link to="/primarylist" className="go">
                        GO
                    </Link>
                </button>

            </div>
        )

    }
}

export default Home