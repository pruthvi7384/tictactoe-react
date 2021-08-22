import React from 'react'
import Square from './Square'

function Border({board , handleSquareClick, winningSquares}) {

    const randerSquare = position=>{
        const isWinningSquares = winningSquares.includes(position);
        return (
            <Square 
                value={board[position]} onClick={()=>{
                    handleSquareClick(position);
                }}
                isWinningSquares={isWinningSquares}
            />
        )
    }

    return (
        <div className="board">
            <div className="board-row">
               {randerSquare(0)}
               {randerSquare(1)}
               {randerSquare(2)}
            </div>
            <div className="board-row">
                {randerSquare(3)}
                {randerSquare(4)}
                {randerSquare(5)}
            </div>
            <div className="board-row">
                {randerSquare(6)}
                {randerSquare(7)}
                {randerSquare(8)}
            </div>
        </div>
    )
}

export default Border
