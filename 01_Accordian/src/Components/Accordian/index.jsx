

import React, { useState } from 'react'
import data from './data'
import './style.css'


function Accordian() {
    const [selected, setSelected] =useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    const handleSingleSelection =(currentId)=>{
        setSelected(currentId === selected ? null : currentId)
    }
    function handleMultiSelection(currentId){
        let copyMultiple = [...multiple]
        const findIndexOfCurrentId= copyMultiple.indexOf(currentId)
        if(findIndexOfCurrentId == -1) copyMultiple.push(currentId)
        else copyMultiple.splice(findIndexOfCurrentId,1 )
    setMultiple(copyMultiple)

    }
    console.log(selected, multiple);
  return (
    <div className='wrapper'>
        <button
        onClick={()=> setEnableMultiSelection(!enableMultiSelection)}
        >Enable Multi selection</button>
      <div className="accordian">
        {
            data && data.length <0 ? <div>No data found</div> :
            data.map((item)=>(
                <div key={item.id} className="item">
                    <div 
                    onClick={enableMultiSelection ? ()=> handleMultiSelection(item.id) : ()=> handleSingleSelection(item.id)}
                    className="title">
                    <h3>{item.question}</h3>
                    <span>+</span>
                    </div>
                    {enableMultiSelection 
                    ? multiple.indexOf(item.id) !== -1 && (
                            <div className="content">{item.answer}</div>
                        ) : selected === item.id && (
                            <div className="content">{item.answer}</div>
                        )
                    }
                    {/* {
                        selected === item.id ? (
                            <div className="content">
                                {item.answer}
                            </div>
                        ) : null
                    } */}
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Accordian
