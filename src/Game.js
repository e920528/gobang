import React, { Component } from 'react';
import './Game.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Board from './Board';

class Game extends Component {
  state = {
    squares: Array(400).fill(null),
    blackIsNext: true,
    lastMove: -1,
    info: "",
    finished: false
  }
  handleClick(i) {
    if(this.state.squares[i] || this.state.finished) return;
    let squares = this.state.squares.slice();
    squares[i] = this.state.blackIsNext ? 1 : 2;//black:1 white:2
    this.setState({
      lastMove: i,
      squares: squares
    });
    if(this.determineWinner(i)){
      let winner;
      if(this.state.blackIsNext)
        winner = "Black";
      else
        winner = "White";
      this.setState({
        info: "Winner is: " + winner,
        finished: true
      })
    }
    else{
      let next;
      if(this.state.blackIsNext)
        next = "White";
      else
        next = "Black";
      this.setState({
        info: "Next Player is: " + next,
        blackIsNext: !this.state.blackIsNext
      })
    }   
      

  }
  determineWinner(lastMove){
    let row = Math.floor(lastMove/20);
    let column = lastMove % 20;
    let color = 1;
    let connectNum = 0;
    if(!this.state.blackIsNext)
      color += 1;
    let c = column - 1;
    let r = row;
    //水平
    while (c >= 0) {
      if(this.state.squares[20 * r + c] !== color)
        break;
      connectNum++;
      if(connectNum >= 4)
        return true;
      c--;
    }
    c = column + 1;
    while(c < 20){
      if(this.state.squares[20 * r + c] !== color)
        break;
      connectNum++;
      if(connectNum >= 4)
        return true;
      c++;
    }
    //鉛直
    c = column;
    r = row - 1;
    connectNum = 0;
    while(r >= 0){
      if(this.state.squares[20 * r + c] !== color)
        break;
      connectNum++;
      if(connectNum >= 4)
        return true;
      r--;
    }
    r = row + 1;
    while(r < 20){
      if(this.state.squares[20 * r + c] !== color)
        break;
      connectNum++;
      if(connectNum >= 4)
        return true;
      r++;
    }

    //左上右下
    c = column - 1;
    r = row - 1;
    connectNum = 0;
    while(r >= 0 && c >= 0){
      if(this.state.squares[20 * r + c] !== color)
        break;
      connectNum++;
      if(connectNum >= 4)
        return true;
      r--;
      c--;
    }
    r = row + 1;
    c = column + 1;
    while(r < 20 && c < 20){
      if(this.state.squares[20 * r + c] !== color)
        break;
      connectNum++;
      if(connectNum >= 4)
        return true;
      r++;
      c++;
    }
    //右上左下
    c = column + 1;
    r = row - 1;
    connectNum = 0;
    while(r >= 0 && c < 20){
      if(this.state.squares[20 * r + c] !== color)
        break;
      connectNum++;
      if(connectNum >= 4)
        return true;
      r--;
      c++;
    }
    r = row + 1;
    c = column - 1;
    while(r < 20 && c >= 0){
      if(this.state.squares[20 * r + c] !== color)
        break;
      connectNum++;
      if(connectNum >= 4)
        return true;
      r++;
      c--;
    }
    return false;
  }
  render() {
    return (
      <div className="game" id="container">
        <div className="game-board">
          <Board onClick = {i => this.handleClick(i)} squares = {this.state.squares}/>
        </div>
        <div className="game-info">
          <div>
            {this.state.info}
          </div>
        </div>
      </div>
    );
  }
}


export default Game;
