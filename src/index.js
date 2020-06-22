import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button
            className="square"
            onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {

    renderSquare(i) {
        return <Square
            value={this.props.squares[i]}
            onClick={() => this.props.handleClick(i)}
        />;
    }

    render() {


        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            squares: Array(9).fill(null),
            isXNext: true,
            winner: null,
            playable: true,
            history: [
                {
                    squares: Array(9).fill(null),
                    isXNext: true,
                    winner: null
                }
            ]
        }
    }

    restart() {
        const newState = {
            squares: Array(9).fill(null),
            isXNext: true,
            winner: null,
            playable: true,
            history: [
                {
                    squares: Array(9).fill(null),
                    isXNext: true,
                    winner: null
                }
            ]
        }

        this.setState(newState);
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (squares[i] || this.state.winner || !this.state.playable) {
            return;
        }

        let isXNext = this.state.isXNext;
        squares[i] = isXNext ? 'X' : 'O';

        const winner = calculateWinner(squares);

        let newState = {squares: squares, isXNext: !isXNext, winner: winner};
        let history = this.state.history;
        history.push(newState);

        newState.history = history;

        this.setState(newState);
    }

    jumpToHistory(i) {
        const historyToJumpTo = this.state.history[i];
        this.setState({
            squares: historyToJumpTo.squares,
            isXNext: historyToJumpTo.isXNext,
            winner: historyToJumpTo.winner,
            playable: i === (this.state.history.length - 1),
            history: this.state.history
        });
    }

    renderStatus() {
        let status;
        if (this.state.winner) {
            status = `winner: ${this.state.winner}`;
        } else {
            status = `Next player: ${this.state.isXNext ? 'X' : 'O'}`;
        }

        status += !this.state.playable ? ' (Checking history, can\'t play)' : '';
        return (
            <div className="status">{status}</div>
        );
    }

    renderHistory() {
        const moves = this.state.history.map((item, i) => {
            return this.renderSingleHistoryRow(item, i);
        });
        return(moves);
    }

    renderSingleHistoryRow(historyRow, i) {
        const gameStart = historyRow.squares.every(item => item == null);
        const goToIndex = gameStart ? 'game start' : `step ${i}`;

        const playedPlayer = historyRow.isXNext ? 'O' : 'X';
        const winner = historyRow.winner? `Winner is: ${historyRow.winner}` : '';
        const desc = gameStart? 'Game start' : `Played player: ${playedPlayer}. ${winner}`;

        return (
            <li>
                <button onClick={() => this.jumpToHistory(i)}>Go to {goToIndex}</button> {desc}
            </li>
        );
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={this.state.squares}
                        handleClick={(i) => this.handleClick(i)}
                    />
                    <div className="game-restart">
                        <button onClick={() => this.restart()}>Restart</button>
                    </div>
                </div>
                <div className="game-info">
                    <div>{this.renderStatus()}</div>
                    <ul>{this.renderHistory()}</ul>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a]
        }
    }

    if (!squares.includes(null)) {
        return 'pat';
    }

    return null;
}
