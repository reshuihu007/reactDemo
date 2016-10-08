/**
 * Created by meng on 2016/10/7.
 */
import React from 'react';
import {Link} from 'react-router'
export default class User extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="col-md-4">
                    <ul className="nav nav-pills nav-stacked" role="tablist">
                        <li><Link to="/user/add">新增用户</Link></li>
                        <li><Link to="/user/list">用户列表</Link></li>
                        <li><Link to="/user/list" query={{orderBy:'id'}}>用户列表</Link></li>
                    </ul>
                </div>
                <div className="col-md-8">
                    {this.props.children}
                </div>
            </div>
        )
    }
}