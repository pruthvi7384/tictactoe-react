import React from 'react'

function Square({value, onClick, isWinningSquares}) {
    return (
       <button style={{
            fontWeight: isWinningSquares ? 'bold' : 'italic',
       }} className="square" type="button" onClick={onClick}>{value}</button>
    )
}

export default Square
