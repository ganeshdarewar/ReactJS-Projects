import React from 'react'
import './about.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images//about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
function About() {
  return (
    <>
      <Header title="About Us" image={HeaderImage} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non impedit laboriosam labore!
      </Header>
      <section className='about__story'>
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet doloremque et, quos praesentium vel rem, perspiciatis eaque aliquam recusandae ipsam quod, nulla cumque voluptatum. Laboriosam beatae illum reiciendis recusandae perspiciatis!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eius laudantium aperiam aut libero at tenetur dolore fuga omnis similique!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda animi sit adipisci!</p>
          </div>
        </div>
      </section>
      <section className='about__vision'>
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet doloremque et, quos praesentium vel rem, perspiciatis eaque aliquam recusandae ipsam quod, nulla cumque voluptatum. Laboriosam beatae illum reiciendis recusandae perspiciatis!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eius laudantium aperiam aut libero at tenetur dolore fuga omnis similique!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda animi sit adipisci!</p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our vision Image" />
          </div>
        </div>
      </section>
      <section className='about__mission'>
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet doloremque et, quos praesentium vel rem, perspiciatis eaque aliquam recusandae ipsam quod, nulla cumque voluptatum. Laboriosam beatae illum reiciendis recusandae perspiciatis!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eius laudantium aperiam aut libero at tenetur dolore fuga omnis similique!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda animi sit adipisci!</p>
          </div>
        </div>
      </section>



    </>
  )
}

export default About
