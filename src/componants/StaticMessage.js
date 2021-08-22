import React from 'react'

function StaticMessage({winner,current}) {
    // const message = winner
    // ? `Winner is ${winner}`
    // : `Next player is ${current.isXNext ? 'X' : 'O'}`;

    const noMoveLeft = current.board.every(el => el !==null);
    return (
        <div className="status-message">
            {winner && !noMoveLeft && <>Winner is <span className={winner === 'X' ? 'text-green' : 'text-orange'}>{winner} !</span></>}{!winner && <>Next player is <span  className={winner === 'X' ? 'text-green' : 'text-orange'}>{current.isXNext ? 'X' : 'O'} !</span></>}{!winner && noMoveLeft && <> <span className="text-green">X</span> <span className="text-orange">O</span> tied !</>}
        </div>
    )
}

export default StaticMessage
