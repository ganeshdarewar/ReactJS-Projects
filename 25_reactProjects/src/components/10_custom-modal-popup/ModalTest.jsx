import React, { useState } from 'react'
import Modal from './Modal'

const ModalTest = () => {
    const [showModalPopup, setShowModalPopup] = useState(false)
    function handleToggleModalPopup(){
        setShowModalPopup(!showModalPopup)
    }
    function onClose(){
        setShowModalPopup(false)
    }
  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {
        showModalPopup && <Modal 

        header={<h1>Customised Header</h1>}
        body={<div>Customized body</div>} 
        footer={<h1>Customized footer</h1>}
        onClose={onClose}
        />
      }
    </div>
  )
}

export default ModalTest
