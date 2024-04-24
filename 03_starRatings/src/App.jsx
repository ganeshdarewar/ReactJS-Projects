import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StarRatings from './components/StarRatings'

function App() {

  return (
    <>
    <StarRatings noOfStars={5}/>
    </>
  )
}

export default App
