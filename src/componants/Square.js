import React from 'react'

function Square({value, onClick}) {
    return (
       <button className="square" type="button" onClick={onClick}>{value}</button>
    )
}

export default Square
