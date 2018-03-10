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
    ).then(

      fetch(`https://api.github.com/users/elendil95`)
      .then(response => response.json())
      .then(
          user=> {
              // How can we use `this` inside a callback without binding it??
              // Make sure you understand this fundamental difference with arrow functions!!!
              this.setState({
                  user2: user
              });
          }
      )
    );

    
}



  render() {
    if (!this.state.user) {
      return (<div className="user-page">LOADING...</div>);
  }
    const user1 = this.state.user;
    const user2 = this.state.user2;
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Anorexic Iguana - Digital Solutions</h1>
        </header>
        <p className="App-intro">
         {this.props.children}
        </p>
        <div className="user">
        <img className ="avatar" src={user1 && user1.avatar_url}/>
        <h2 className="user-info__title">{user1 && user1.login} </h2>
        </div>

        <div className="user">
        <img className ="avatar" src={user2 && user2.avatar_url}/>
        <h2 className="user-info__title">{user2 && user2.login } </h2>
        </div>

      </div>
    );
  }
}

export default App;
