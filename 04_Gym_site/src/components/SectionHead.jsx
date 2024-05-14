import React from 'react'
import { GiCutDiamond } from "react-icons/gi";
const SectionHead = ({icon, title}) => {
    return (
        <div className={`section__head `}>
            <span>
               {icon}
            </span>
            <h2>{title}</h2>
        </div>
    )
}

export default SectionHead
