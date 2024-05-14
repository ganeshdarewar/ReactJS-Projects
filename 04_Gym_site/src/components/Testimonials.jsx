import React, { useState } from 'react'
import SectionHead from './SectionHead'
import { ImQuotesLeft } from "react-icons/im";
import Card from '../UI/Card';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import { testimonials } from '../data';

const Testimonials = () => {
    const [index, setIndex] = useState(0)
    const { name, quote, job, avatar } = testimonials[index]

    const prevTestimonialHandle =()=>{
        setIndex(prev => prev-1)
        if(index<=0){
            setIndex(testimonials.length-1)
        }
    }
    
    const nextTestimonialHandle =()=>{
        if(testimonials.length-1>index){
            setIndex(prev => prev+1)
        }
        else{
            setIndex(0)
        }
    }


    return (
        <div>
            <section className='testimonials'>
                <div className="container testimonials__container">
                    <SectionHead icon={<ImQuotesLeft />} title='Testimonials' className='testimonials__head' />
                    <Card className='testimonial'>
                        <div className="testimonial__avatar">
                            <img src={avatar} alt={name} />
                        </div>
                        <p className='testimonial__quote'>{quote}</p>
                        <h5>{name}</h5>
                        <small className='testimonial__title'>{job}</small>
                    </Card>
                    <div className="testimonials__btn-container">
                        <button onClick={prevTestimonialHandle} className="testimonials__btn"> <IoIosArrowDropleftCircle/> </button>
                        <button onClick={nextTestimonialHandle} className="testimonials__btn"> <IoIosArrowDroprightCircle/> </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials
