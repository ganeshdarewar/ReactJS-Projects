import React, { useEffect, useState } from 'react'

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState('hex')
  const [color, setColor] = useState('#000')

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length)
  }

  function handleCreateHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', "e", "f"]
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)]
    }
    setColor(hexColor)
  }
  function handleCreateRgbColor() {
    const r = randomColorUtility(256)
    const g = randomColorUtility(256)
    const b = randomColorUtility(256)
    setColor(`rgb(${r}, ${g}, ${b})`)
    console.log(color);
  }
  useEffect(() => {
    typeOfColor === 'rgb' ? handleCreateRgbColor() : handleCreateHexColor()
  }, [typeOfColor])

  return (
    <div className='w-[100vw] h-[100vh] overflow-hidden ' style={{ backgroundColor: color }}>
      <div className='flex justify-center gap-2 mt-2'>
        <button className='bg-white p-2 rounded' onClick={() => setTypeOfColor('hex')}>create hex color</button>
        <button className='bg-white p-2 rounded' onClick={() => setTypeOfColor('rgb')}>create rgb color</button>
        <button className='bg-white p-2 rounded' onClick={typeOfColor === 'hex' ? handleCreateHexColor : handleCreateRgbColor}>generate color</button>
      </div>
      <div className='h-full  flex justify-center items-center text-white text-6xl mt-5xl flex-col gap-4'>
        <h3>{typeOfColor}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  )
}

export default RandomColor
