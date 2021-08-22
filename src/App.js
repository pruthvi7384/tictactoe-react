import React,{useState} from "react";
import './style_componants/style.scss'
import Border from './componants/Border.js';
import calculateWinner from './componants/helpore.js'

function App() {
  
  const [borde,setbox]=useState(Array(9).fill(null));

  const [isXnext,setXisnext]=useState(false);
  const winner = calculateWinner(borde);
  const message = winner ? `Winner is ${winner}` : `Next Player is ${isXnext ? 'X' : 'O'}`;
  console.log(winner);
  console.log(borde);

  const handaleSquareClick = (position)=>{
      if(borde[position] || winner){
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
  return (
    
    <div className="app">
      <h1>Tic Tac Toe !</h1>
      <h2>{message}</h2>
      <Border borde={borde} handaleSquareClick={handaleSquareClick} />
    </div>
  );
}

export default App;
