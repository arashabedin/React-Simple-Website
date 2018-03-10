import React, {Component} from 'react';

 class User extends Component{

constructor(){
super();
this.state={};

}

componentDidMount(){

    fetch("https://api.github.com/users/" + this.props.match.params.username + "/repos")
    .then(response => response.json())
    .then(
        repos=> {
            this.setState({
                repos: repos
            });
        }
    );
}


render(){

    if (!this.state.repos) {
        return (<div className="user-page">LOADING...</div>);
    }

const repos = this.state.repos; 
return( 
    
<div className="App">
<br/>
<img className ="avatar" src={repos && repos[0].owner.avatar_url}/>
<h1>{this.props.match.params.username}</h1>
{repos && repos.map(function(item){

return <div>
<strong>{item.name}</strong>
<br/>
</div>

})}
</div>
);
}

}

export default User;