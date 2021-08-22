import React from 'react'

function Square({value, onClick, isWinningSquares}) {
    return (
       <button className={`square $(isWinningSquares ? 'winning' : '') ${value === 'X' ? 'text-green' : 'text-orange'}`} type="button" onClick={onClick}>{value}</button>
    )
}

export default Square
