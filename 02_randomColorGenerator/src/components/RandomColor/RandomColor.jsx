import React, { useEffect, useState } from 'react'

function RandomColor() {
    const [color, setColor] = useState("#000")
    const [typeofColor, setTypeofColor] = useState('hex')

    function handleCreateHexRandomColor(){
        const hex =['1','2','3','4','5','6','7','8','9','0','a','b', 'c', 'd', 'e', 'f']
         let hexColor ="#"
         for (let i = 0; i < 6; i++) {
            hexColor += hex[Math.floor(Math.random()*hex.length)]
         }
         setColor(hexColor)
    }
    function handleCreateRgbRandomColor(){
      const r = Math.floor(Math.random()*255)
      const g = Math.floor(Math.random()*255)
      const b = Math.floor(Math.random()*255)
      setColor(`rgb(${r},${g},${b})`)
    }
    useEffect(()=>{
      typeofColor === 'rgb' ? handleCreateRgbRandomColor() : handleCreateHexRandomColor()
    }, [typeofColor])
  return (
    <div className='container' style={{
        width: '100vw',
        height: '100vh',
        background : color
    }}>
      <button onClick={()=> setTypeofColor('hex') || handleCreateHexRandomColor()}>Generate Hex color</button>
      <button onClick={()=> setTypeofColor('rgb') || handleCreateRgbRandomColor() }>Generate RGB color</button>
      <button onClick={
        typeofColor === 'hex' ? handleCreateHexRandomColor : handleCreateRgbRandomColor
      }>Generate  color</button>
      <h1>{color}</h1>
    </div>
  )
}

export default RandomColor
