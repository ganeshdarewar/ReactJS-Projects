import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ExtraProductsSection from './components/ExtraProductsSection'
import Policy from './components/Policy'
import Products from './components/Products'
import WhyChoose from './components/WhyChoose'
import Footer from './components/Footer'
import { ProductContextProvider, useProducts } from './context/ProductContext'


const App = () => {
  const { cartProducts } = useProducts()
  return (
    <>
      <Hero />
      <ExtraProductsSection />
      <Policy />
      <Products />
      <WhyChoose />

    </>
  )
}

export default App
