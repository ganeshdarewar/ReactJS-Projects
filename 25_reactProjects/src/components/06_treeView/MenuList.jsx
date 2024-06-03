import React from 'react'
import MenuItem from './MenuItem'

const MenuList = ({list=[]}) => {
  return (
    <ul className='px-3'>
      {
        list && list.map((listItem, index)=> <MenuItem item={listItem} key={index}/>)
      }
    </ul>
  )
}

export default MenuList
