import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {

    renderSquare(i) {
        return (
            <Square value = {this.props.squares[i]} onClick = {() => this.props.onClick(i)}/>
        );
    }
    createView = () =>{
        let render = [];
        for (let i = 0;  i < 20; i++) {
            let row = [];
            for (let j = 0; j < 20; j++) {
                row.push(this.renderSquare(20*i+j))
            }
            render.push(<div className="board-row">{row}</div>)
        }
        return render;

    }
   

    render() {
        return (
            <div>
                {this.createView()}
            </div>
            
        );
    }
}

export default Board;