import React, { useState } from 'react'
import MenuList from './MenuList'
const MenuItem = ({ item = [] }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})
  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren({
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]
    })
  }
  return (
    <li>
      <div className='flex'>
        <p>{item.label}</p>
        {
          item.children ? 
          <span onClick={() => handleToggleChildren(item.label)}>
          {
            displayCurrentChildren[item.label] ? '-' : '+'
          }
        </span>
          : null
        }
      </div>
      {
        item.children && item.children.length > 0 && displayCurrentChildren[item.label] ?
          <MenuList list={item.children} />
          : null
      }
    </li>
  )
}

export default MenuItem
