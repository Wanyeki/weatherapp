import React, { Component } from 'react';

class Time extends Component {
    state = {  }
    componentDidMount=()=>{
        let date=new Date()
        this.setState({
            hr:date.getHours(),
            min:date.getMinutes()
        })
    }
    render() { 
        return ( 
        <div className="time">
            <div className="time_wrapper">
                <div className="now">
                    {this.state.hr}:{this.state.min}
                </div>
                <div className="today">Tuesday, August 17, 2021</div>
            </div>
        </div> );
    }
} 
export default Time;