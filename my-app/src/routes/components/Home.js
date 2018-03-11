import React, {Component} from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
}
  componentDidMount() {
    fetch(`https://api.github.com/users/arashabedin`)
    .then(response => response.json())
    .then(
        user => {
  
            this.setState({
                user: user
            });
     
        }
    ).then(

      fetch(`https://api.github.com/users/elendil95`)
      .then(response => response.json())
      .then(
          user=> {
              this.setState({
                  user2: user
              });
          }
      )
    ).then(
      fetch(`https://api.github.com/users/mdmosiurrahman`)
      .then(response => response.json())
      .then(
          user=> {
              this.setState({
                  user3: user
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
    const user3= this.state.user3;

    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Anorexic Iguana - Digital Solutions</h1>
        </header>
        <p className="App-intro">
         {this.props.children}
        </p>
        <UserTemp user={user1}/>
        <UserTemp user={user2}/>
        <UserTemp user={user3}/>

      </div>
    );
  }
}


class UserTemp extends Component{
render(){
return(
   <div className="user">
    <img alt='' className ="avatar" src={ this.props.user && this.props.user.avatar_url}/>
    <h2 className="user-info__title">{this.props.user && this.props.user.login } </h2>
    <Link to={`/user/${this.props.user && this.props.user.login }`}>see more</Link>

  </div>

);
}
}

export default Home;
