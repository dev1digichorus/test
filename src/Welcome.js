import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Welcome extends Component {

  constructor(props) {
    super(props)
    this.state = {
      uname: ''
    }
  }

  componentDidMount() {
    this.setState({ uname: 'welcome' })
  }


  render() {
    return (
      <div>
        <h1>{this.state.uname}</h1>
      </div>
    );
  }
}

export default Welcome;