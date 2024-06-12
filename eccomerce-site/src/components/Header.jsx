import React, { useEffect } from 'react'
import Logo from '../images/log.png'
import { useProducts } from '../context/ProductContext'
import { NavLink } from 'react-router-dom'
const Header = () => {
    const { cartProducts } = useProducts()
    useEffect(() => {
        console.log(cartProducts);
    }, [cartProducts])
    return (
        <header className="section-navbar">
            <section className="top_txt">
                <div className="head container">
                    <div className="head_txt">
                        <p>Free shipping, 30-day return or refund guarantee.</p>
                    </div>
                    <div className="sing_in_up">
                        <a href="#">SIGN IN</a>
                        <a href="#">SIGN UP</a>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="navbar-brand">
                    <a href="index.html">
                        <img src={Logo} alt="logo" className="logo" width="80%" height="auto" />
                    </a>
                </div>
                <nav className="navbar">
                    <ul>
                        <li className="nav-item">
                            <NavLink to='/' className={({ isActive }) => '.active'}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about' className={({ isActive }) => '.active'}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/products' className={({ isActive }) => '.active'}>Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact' className={({ isActive }) => '.active'}>Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/addtocart' className='nav-link add-to-cart-button'>
                                <i className="fa-solid fa-cart-shopping">{cartProducts.length}</i>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}

export default Header
