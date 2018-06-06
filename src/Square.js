import React, { Component } from 'react';
import './Square.css'
class Square extends Component {
    render() {
        if(this.props.value === 1)
            return (
                <button className="square fa fa-circle" onClick={this.props.onClick}>
                </button>
            );
        if(this.props.value === 2)
            return (
                <button className="square fa fa-circle white" onClick={this.props.onClick}>
                </button>
            );
        else
            return (
                <button className="square" onClick={this.props.onClick}>
                </button>
            );

    }
}

export default Square;