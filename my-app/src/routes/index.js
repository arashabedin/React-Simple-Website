import React from 'react';
import{BrowserRouter,Route} from 'react-router-dom';
import Home from './Home';
import User from './User';

export default() => (
<BrowserRouter>
<div>
<Route path="/home" component={Home}/>
<Route path="/user/:username" component={User}/>

</div>
</BrowserRouter>

);