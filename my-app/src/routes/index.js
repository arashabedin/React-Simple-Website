import React from 'react';
import{BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';

export default() => (
<BrowserRouter>
<div>
<Route path="/home" component={Home}/>
<Route path="/user/:username" component={User}/>

</div>
</BrowserRouter>

);