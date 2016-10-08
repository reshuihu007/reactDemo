import React from 'react';
export default class MessageBox extends React.Component {
    handleSubmit(event){
        event.preventDefault();
        alert('xxx');
        var name = this.refs.name.value;
        var content = this.refs.content.value;
        this.props.add({name,content});
        return false;
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="form-horizontal" role="form">
                <div className="form-group">
                    <label htmlFor="username" className="control-label col-xs-1">姓名</label>
                    <div className="col-xs-11">
                        <input ref="name" type="text" id="name" className="form-control" name="name"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="content" className="control-label col-xs-1">内容</label>
                    <div className="col-xs-11">
                        <input ref="content" type="text" id="content" className="form-control" name="content"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-1 col-sm-10">
                        <button type="submit" className="btn btn-default">发言</button>
                    </div>
                </div>
            </form>
        )
    }

}