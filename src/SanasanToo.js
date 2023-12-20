import React, { useState } from 'react'
import './App.css'
const SanasanToo = () => {
const [sanamsarguiToo, setsanamsarguiToo] = useState( Math.floor(Math.random() * 100))
const [taahtoo, settaahtoo] = useState('')
const [hariu, sethariu] = useState('')
const [oroldlogo, setoroldlogo] = useState(5)
console.log('sanamsarguiToo',sanamsarguiToo)

const haihued = (e) => { 
    const text = e.target.value
    console.log(text)
    settaahtoo(text)
 }
 const tivhDarahUed = () => {
    console.log(sanamsarguiToo,taahtoo)
    if (sanamsarguiToo == taahtoo){
    console.log('win')
   sethariu('ta hojloo'+ oroldlogo)
} else if (oroldlogo - 1 == 0){
    sethariu('ta hojigdloo')
} else if(taahtoo > sanamsarguiToo){
    console.log('in baina')
    sethariu('ih baina' + (oroldlogo - 1))
    setoroldlogo(oroldlogo - 1)
} else if (taahtoo < sanamsarguiToo){
    console.log('baga baina')
    sethariu('baga baina' + (oroldlogo - 1))
    setoroldlogo(oroldlogo - 1)
}
 } 

  return (
    <div className='container'>
        <div className='style'>
        <h1>Sanasan too hed ve?</h1>
        </div>
        <div className='ongo'>
        <p>1-100-n hoorond baigaa toog taagaarai</p>
        </div>
        <div>
        <input onChange={haihued} type="text" />
        <button onClick={tivhDarahUed}>Taah</button>
        </div>
        <h3>Hint: {hariu}</h3>
        
    </div>
  )
}

export default SanasanToo