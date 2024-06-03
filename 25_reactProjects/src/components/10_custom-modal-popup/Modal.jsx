import React from 'react'
import './modal.css'
const Modal = ({ id, header, body, footer, onClose }) => {
    return (
        <div id={id || 'Modal'} className='fixed z-1 pt-[150px] left-0 top-0 w-full h-full overflow-auto bg-yellow-200'>
            <div id="modal-content" className='relative bg-[#fefefe] m-auto p-0 border-2 border-red-800 w-[80%] '>
                <div id='header' className='py-1 px-4 text-white flex items-center justify-between bg-green-400'>
                    <h2 className='text-2xl'>{header ? header : 'header'}</h2>
                    <span onClick={onClose} id="close-modal-icon" className='cursor-pointer text-[40px]'>&times;</span>
                </div>
                <div id="body" className='py-[2px] px-[15px] text-center h-52 '>
                    {body ?
                        body
                        :
                        <div>
                            <p>This is our modal body</p>
                        </div>}
                </div>
                <div id="footer" className='py-[2px] px-[15px] text-center bg-[#5cb85c] text-white'>
                    {footer ?
                        footer
                        :
                        <div>
                            <p>This is our footer body</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Modal
