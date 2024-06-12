import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router'
import Footer from './components/Footer'
import { ProductContextProvider } from './context/ProductContext'

const Layout = () => {

    const [cartProducts, setCartProducts] = useState([])
    const addProducts = (id, quantity, price) => {
        setCartProducts((prevCartProducts) => {
            const updatedProducts = prevCartProducts.map((prevProduct) =>
                prevProduct.id === id ? { ...prevProduct, quantity: prevProduct.quantity + quantity } : prevProduct
            );

            if (!updatedProducts.some((product) => product.id === id)) {
                updatedProducts.push({ id, quantity, price });
            }
            return updatedProducts;
        });
    };

    useEffect(() => {
        const cartProducts = JSON.parse(localStorage.getItem("cartProducts"))
        cartProducts && cartProducts.length > 0 ? setCartProducts(cartProducts) : null
    }, [])
    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
    }, [cartProducts])

    return (
        <ProductContextProvider value={{ cartProducts, addProducts }}>
            <Header />
            <Outlet />
            <Footer />
        </ProductContextProvider>
    )
}

export default Layout
