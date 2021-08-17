import React, {useState} from 'react'
import Square from './Square'

function Border() {

    const [borde,setbox]=useState(Array(9).fill(null));

    const [isXnext,setXisnext]=useState(false);
    console.log(borde);

    const handaleSquareClick = (position)=>{
        if(borde[position]){
            return;
        }
        setbox((prv)=>{
           return prv.map((square,pos)=>{
                if(pos === position){
                    return isXnext ? 'X' : 'O';
                }
                return square;
            })
        });
        setXisnext((prev)=> !prev);
    };

    const randerSquare = position=>{
        return (
            <Square 
                value={borde[position]} onClick={()=>{
                    handaleSquareClick(position);
                }}
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
