/**
   es 声明组件方法

    1. 在constructor里调用init
    2. init方法里调用后台

 */

import React from 'react';
import $ from 'jquery';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
export default class MessageBox extends React.Component {
    constructor(props){
        super(props);
        //这是es6里定义初始状态的方法
        this.state = {messages:[]};
        this.init();
    }
    //调用ajax接口获取数据
    init(){
        console.log(this.props.url,'2');
        $.get("http://localhost:8000/messages").then( (messages)=> {

            this.setState({messages:messages});
        });
    }

    addMessage(message){
        $.post(this.props.url,message).then(doc =>{

            this.state.messages.push(doc);
            this.setState({messages:this.state.messages});
        })
    }

    del(id){
        $.ajax({
            url:`${this.props.url}/${id}`,
            method:'DELETE'
        }).then(result=>{
            var messages = this.state.messages.filter(item => item._id!=id);
            this.setState({messages});
        })
    }

    render() {
        return (
            <div className="container">
                <h3 style={{textAlign:'center'}}>珠峰留言版2</h3>
                <div className="row">
                    <div className="col-xs-12">
                        <MessageList data={this.state.messages} del={this.del.bind(this)} ></MessageList>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <MessageForm add = {this.addMessage.bind(this)}></MessageForm>
                    </div>
                </div>
            </div>
        )
    }

}