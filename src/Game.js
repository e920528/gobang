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
    squares[i] = this.state.blackIsNext ? 1 : 2;
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
