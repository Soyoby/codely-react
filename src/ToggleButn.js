import React, { useState } from 'react'
import './style.css'
const ToggleButn = () => {
const [lastClick, setlastClick] = useState('')

 const [boxes, setboxes] = useState(['','','','','','','','','', ])
 const [winner, setwinner] = useState('')
 const checkWinner = (lastBoxes) => {
  console.log(lastBoxes)
  // hevtee chiglel
  if (lastBoxes[0] === lastBoxes[1] && lastBoxes[0] === lastBoxes[2]) {
    console.log('Winner=' + lastBoxes[0]);
    setwinner(lastBoxes[0])
   
 }
 if (lastBoxes[3] === lastBoxes[4] && lastBoxes[3] === lastBoxes[5]) {
  console.log('Winner=' + lastBoxes[0]);
  setwinner(lastBoxes[0])
 
}
if (lastBoxes[2] === lastBoxes[5] && lastBoxes[2] === lastBoxes[8]) {
  console.log('Winner=' + lastBoxes[0]);
  setwinner(lastBoxes[0])
 
}
  // Bosoo chiglel
 if (lastBoxes[0] === lastBoxes[3] && lastBoxes[0] === lastBoxes[6]) {
  console.log('Winner=' + lastBoxes[0]);
  setwinner(lastBoxes[0])
}
if (lastBoxes[1] === lastBoxes[4] && lastBoxes[1] === lastBoxes[7]) {
  console.log('Winner=' + lastBoxes[0]);
  setwinner(lastBoxes[0])
}
if (lastBoxes[2] === lastBoxes[5] && lastBoxes[2] === lastBoxes[8]) {
  console.log('Winner=' + lastBoxes[0]);
  setwinner(lastBoxes[0])
}
// Diaganol chiglel
if (lastBoxes[0] === lastBoxes[4] && lastBoxes[0] === lastBoxes[8]) {
  console.log('Winner=' + lastBoxes[0]);
  setwinner(lastBoxes[0])
}
if (lastBoxes[2] === lastBoxes[4] && lastBoxes[2] === lastBoxes[6]) {
  console.log('Winner=' + lastBoxes[0]);
  setwinner(lastBoxes[0])
}
 }
 const onClick = (i) => {
  if (boxes[i] === '') {
    let next = lastClick === 'X' ? 'O' : 'X';
    boxes[i] = next
    setlastClick(next)
   setboxes([...boxes])
   checkWinner(boxes)
  }
 }
  return (
    <div className='container'>
        {winner !== '' ? <h1 className='winner'>Ялагч бол: {winner}</h1> : null}
        <div className='tic-tac'>
            {
              boxes.map((box, i) => 
              <div className='box' onClick={()=>onClick(i)}>{box}</div> )
            }
        </div>
    </div>
  )
}

export default ToggleButn