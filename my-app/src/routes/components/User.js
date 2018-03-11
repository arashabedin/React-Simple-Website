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
<h2>Projects</h2>
{repos && repos.map(function(item){

return <div className='repos'>
<strong>{item.name}</strong>
<hr/>
<p>
{item.language  ? 'language: ' + item.language:""}
</p>
<p>
{item.description  ? 'description: ' + item.description:'no data'}

</p>
</div>

})}
</div>
);
}

}

export default User;