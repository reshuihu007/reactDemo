import React from 'react'
import ReactDOM from 'react-dom'
require('bootstrap/dist/css/bootstrap.css')
import App from './components/App'
/*
    Router 代表一个路由容器
    Route 代表一个路由规则
*/

import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import Home from './components/Home'
import Profile from './components/Profile'
import User from './components/User'
import UserAdd from './components/UserAdd'
import UserList from './components/UserList'
import UserDetail from './components/UserDetail'

ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={App} >
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}></Route>
        <Route path="user" component={User}>
            <IndexRoute component={UserList}/>
            <Route path="add" component={UserAdd}></Route>
            <Route path="list" component={UserList}></Route>
            <Route path="detail/:id" component={UserDetail}></Route>
        </Route>
        <Route path="profile" component={Profile}></Route>
    </Route>

</Router> ,document.getElementById('app'));

<App>
    <Home></Home>
</App>