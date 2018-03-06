import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
}
  componentDidMount() {
    fetch(`https://api.github.com/users/arashabedin`)
    .then(response => response.json())
    .then(
        user => {
            // How can we use `this` inside a callback without binding it??
            // Make sure you understand this fundamental difference with arrow functions!!!
            this.setState({
                user: user
            });
        }
    );
}



  render() {
    if (!this.state.user) {
      return (<div className="user-page">LOADING...</div>);
  }
    const user = this.state.user;

    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
         {this.props.children}
        </p>
        <h2 className="user-info__title">{user.login} ({user.blog})</h2>

      </div>
    );
  }
}

export default App;
