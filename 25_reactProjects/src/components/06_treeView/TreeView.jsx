import React from 'react'
import MenuList from './MenuList'

const TreeView = ({menus=[]}) => {
  return (
    <MenuList list={menus}/>
  )
}

export default TreeView
