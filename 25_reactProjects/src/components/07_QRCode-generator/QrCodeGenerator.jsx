import React, { useState } from 'react'
import QRCode from 'react-qr-code'
const QrCodeGenerator = () => {
  const [input, setInput] = useState('')
  const [qrData, setQrData ] = useState('')
  function handleQRCode(){
    setQrData(input)
    setInput('')
  }
  return (
    <div>
      <div>
        <input type="text" placeholder='enter input' value={input} onChange={(e)=> setInput(e.target.value)}/>
        <button disabled={input.trim() === '' ? true : false} onClick={handleQRCode} >Get QR Code</button>
      </div>
      <QRCode value={qrData}/>
    </div>
  )
}

export default QrCodeGenerator
