import React from 'react'
import './trainers.css'
import { trainers } from '../../data'
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import Trainer from '../../components/Trainer';

function Trainers() {
  return (
    <>
     <Header title='Our Trainers' image={HeaderImage} >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dignissimos labore, amet repellendus consequatur excepturi dicta id aspernatur facere rem.
     </Header>
     <section className="trainers">
      <div className="container trainers__container">
        {
          trainers.map(({id, image, name, job, socials}, index)=>(
            <Trainer key={id} image={image}  index={index} name={name} job={job} socials ={
              [
                {icon: <BsInstagram/>, link:socials[0]},
                {icon: <AiOutlineTwitter/>, link:socials[1]},
                {icon: <FaFacebook/>, link:socials[2]},
                {icon: <FaLinkedin/>, link:socials[3]},
              ]
            } /> 
          ))
        }
      </div>
     </section>
    </>
  )
}

export default Trainers
