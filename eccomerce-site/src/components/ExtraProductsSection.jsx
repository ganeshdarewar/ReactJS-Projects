import React from 'react'
import Laptopimg from '../images/laptop.png'
import headphoneImg from '../images/headphoneEcom.png'
import mobileImg from '../images/mobiles.png'
const ExtraProductsSection = () => {
    return (
        <section className="section-extra-product">
            <div className="container grid grid-three--cols">
                <div className="div-extra grid grid-two--cols">
                    <div className="extra-text">
                        <p>new year sale</p>
                        <h3>get an extra 50% off</h3>
                        <a href="#">Show now</a>
                    </div>
                    <div className="extra-img extra-laptop">
                        <img src={Laptopimg} alt="" />
                    </div>
                </div>

                <div className="div-extra grid grid-two--cols">
                    <div className="extra-text">
                        <p>new year sale</p>
                        <h3>40% discount on speakers</h3>
                        <a href="#">Show now</a>
                    </div>
                    <div className="extra-img">
                        <img src={headphoneImg} alt="" />
                    </div>
                </div>

                <div className="div-extra grid grid-two--cols">
                    <div className="extra-text">
                        <p>new year sale</p>
                        <h3>get an extra 50% off</h3>
                        <a href="#">Show now</a>
                    </div>
                    <div className="extra-img">
                        <img src={mobileImg} alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ExtraProductsSection
