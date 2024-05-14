import React from 'react'
import { SiOpenaigym } from "react-icons/si";
const Card = ({className, children}) => {
  return (
    <article className={`card ${className}`}>
        {children}
    </article>
  )
}

export default Card
