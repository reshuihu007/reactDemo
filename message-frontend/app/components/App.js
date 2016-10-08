/**
 * Created by meng on 2016/10/7.
 */
import React from 'react';
import {Link} from 'react-router';
export default class App extends React.Component{
    render(){
         return(
             <div className="container">
                 <nav className="navbar navbar-inverse">
                     <div className="container-fluid">
                         <div className="navbar-header">
                             <div className="navbar-brand">珠峰React</div>
                         </div>
                         <div className="nav navbar-nav">
                             <li><Link to="/home">首页</Link></li>
                             <li><Link to="/user">用户管理</Link></li>
                             <li><Link to="/profile">个人管理</Link></li>
                             <li><Link activeStyle={{color:'red'}} to="/home">首页</Link></li>
                             <li><Link activeStyle={{color:'red'}} to="/user">用户管理</Link></li>
                             <li><Link activeStyle={{color:'red'}} to="/profile">个人管理</Link></li>
                         </div>
                     </div>
                 </nav>
                 <div className="row">
                     <div className="col-sm-12">
                         {this.props.children}
                     </div>
                 </div>
             </div>
         )
    }
}