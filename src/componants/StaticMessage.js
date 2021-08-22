import React from 'react'

function StaticMessage({winner,current}) {
    // const message = winner
    // ? `Winner is ${winner}`
    // : `Next player is ${current.isXNext ? 'X' : 'O'}`;

    const noMoveLeft = current.board.every(el => el !==null);
    return (
        <h2>
            {winner && !noMoveLeft && `Winner is ${winner} !`}{!winner && `Next player is ${current.isXNext ? 'X' : 'O'} !`}{!winner && noMoveLeft && 'X and O tied !'}
        </h2>
    )
}

export default StaticMessage
