import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import logo from '../logo.svg';
import './navbar.css';
import axios from 'axios'

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
        }
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        
        return (
            <nav className="navbar navbar-expand-l navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top " alt="logo" />
                    <strong className="text-secondary">EcHo</strong>
                </Link>
                <button onClick={this.toggleNavbar} className={`${classTwo} navbar-toggler my-toggler`}  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                    {loggedIn ? (
                        <div className={`${classOne}`} id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="#" className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={this.logout}>
                                        <span className="text-secondary">logout</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        ) : (
                        <div className={`${classOne}`} id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link" data-target=".navbar-collapse.show" onClick={this.toggleNavbar} className={`${classTwo}`}>
                                        <span className="text-secondary">log in</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/signup" className="nav-link" data-target=".navbar-collapse.show">
                                        <span className="text-secondary">sign up</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}  
            </nav>
        )
    }
}

export default Navbar