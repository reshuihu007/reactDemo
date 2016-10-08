import React from 'react';
export default class UserDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={id:this.props.params.id};
    }

    render(){
        return(
            <div className="container">
                {this.state.id}
            </div>
        )
    }
}

