import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
const StarRating = ({noOfStars =5}) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex)
    }
    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex)
    }
    function handleMouseLeave(getCurrentIndex){
        setRating(rating)
    }
  return (
    <div id='star-rating' className='flex'>
      {
        [...Array(noOfStars)].map((_,index)=>{
            index +=1
            return(
                <FaStar
                className={index <= (hover || rating) ? 'text-[yellow]': null}
                key={index}
                onClick={()=> handleClick(index) }
                onMouseMove={()=> handleMouseEnter(index)}
                onMouseLeave={()=> handleMouseLeave(index)}
                size={40}
                />
            )
        })
      }
    </div>
  )
}

export default StarRating
