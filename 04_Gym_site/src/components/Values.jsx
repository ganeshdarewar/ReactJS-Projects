import React from 'react'
import Image from '../images/values.jpg'
import { values } from '../data'
import SectionHead from './SectionHead'
import { GiCutDiamond } from "react-icons/gi";
import Card from '../UI/Card';
import { SiOpenaigym } from "react-icons/si";
const Values = () => {
    return (
        <section className='values'>
            <div className="container values__container">
                <div className="values__left">
                    <div className="values__image">
                        <img src={Image} alt="values image" />
                    </div>
                </div>
                <div className="values__right">
                    <SectionHead icon={<GiCutDiamond />} title="Values"/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae ad quis ipsum?</p>
                    <div className="values__wrapper">
                        {
                            values.map(({id, icon, title, desc})=>(
                                <Card key={id} className='values__value'>
                                    <span><SiOpenaigym /></span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>
                                </Card>
                            ))
                        }
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Values
