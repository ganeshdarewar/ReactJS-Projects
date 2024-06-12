import React from 'react'
import ecompost from '../images/ecompost.png'
const WhyChoose = () => {
    return (
        <section className="section-why--choose">
            <div className="container">
                <h2 className="section-common--heading">Why Choose Thapa Store</h2>
                <p className="section-common--subheading">
                    Choose Thapa EduHub for a holistic, enriching learning experience that empowers you to achieve your goals.
                </p>
            </div>

            <div className="container grid grid-three--cols">
                <div className="choose-left-div text-align--right">
                    <div className="why-choose--div" data-aos="zoom-in-up" data-aos-delay="0">
                        <p className="common-text--highlight">1</p>
                        <h3 className="section-common--title">Wide Selection</h3>
                        <p>
                            Thapa Store offers a diverse range of gadgets, from smartphones to smart home devices, ensuring you find what you need to elevate your lifestyle and meet your tech requirements.
                        </p>
                    </div>

                    <div className="why-choose--div" data-aos="zoom-in-up" data-aos-delay="300">
                        <p className="common-text--highlight">2</p>
                        <h3 className="section-common--title">Quality Assurance</h3>
                        <p>
                            Every gadget at Thapa Store undergoes rigorous quality checks, guaranteeing reliability and performance, so you can shop with confidence knowing you're getting the best.
                        </p>
                    </div>

                    <div className="why-choose--div" data-aos="zoom-in-up" data-aos-delay="600">
                        <p className="common-text--highlight">3</p>
                        <h3 className="section-common--title">Competitive Prices</h3>
                        <p>
                            Enjoy great value with Thapa Store's competitive prices on high-quality gadgets, making top-of-the-line technology accessible to all without compromising on quality or performance.
                        </p>
                    </div>
                </div>
                <div className="choose-center-div" data-aos="zoom-in" data-aos-delay="300">
                    <figure>
                        <img src={ecompost} alt="thapa technical home page" />
                    </figure>
                </div>
                <div className="choose-right-div">
                    <div className="why-choose--div text-align--left" data-aos="zoom-in-up" data-aos-delay="0">
                        <p className="common-text--highlight">4</p>
                        <h3 className="section-common--title">Expert Guidance</h3>
                        <p>
                            Our knowledgeable staff provides expert guidance, helping you choose the right gadget to meet your needs and preferences, ensuring you make informed decisions every step of the way.
                        </p>
                    </div>

                    <div className="why-choose--div text-align--left" data-aos="zoom-in-up" data-aos-delay="300">
                        <p className="common-text--highlight">5</p>
                        <h3 className="section-common--title">Convenient Shopping</h3>
                        <p>
                            With Thapa Store, shopping for gadgets is easy and convenient. Our user-friendly website and secure payment options ensure a seamless experience from browsing to checkout, all from the comfort of your home.
                        </p>
                    </div>

                    <div className="why-choose--div text-align--left" data-aos="zoom-in-up" data-aos-delay="600">
                        <p className="common-text--highlight">6</p>
                        <h3 className="section-common--title">Excellent Service</h3>
                        <p>
                            Thapa Store is committed to providing excellent service to our customers. From prompt assistance with inquiries to efficient handling of orders and deliveries, we prioritize your satisfaction every step of the way.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default WhyChoose
