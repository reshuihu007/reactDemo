import React from 'react';
import {Link} from 'react-router';
export default class UserList extends React.Component{
    constructor(props){
        super(props);
        let {query} = this.props.location;
        //console.log(this.props,query);
        var data = [{id:3,name:'张三'},{id:2,name:'李四'},{id:1,name:'王五'}];
        data = data.sort((a, b)=> {
            return a[query.orderBy] - b[query.orderBy];
        });
        this.state = {data: data};
    }
    render(){
        return(
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to="user/detail/1">zs</Link>
                </li>
                <li className="list-group-item"><Link to="user/detail/2">ls</Link></li>
                {
                    this.state.data.map((item, index)=> {
                        return <li key={index} className="list-group-item">
                            <Link to={"/user/detail/"+item.id}>{item.id}:{item.name}</Link>
                        </li>
                    })
                }
            </ul>
        )
    }
}

