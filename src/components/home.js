import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    constructor() {
        super()
    }


    render() {

        return (
            <div>
                <Link to="/primarylist" className="btn">
                    <span className="text-secondary">twist it</span>
                </Link>
            </div>
        )

    }
}

export default Home