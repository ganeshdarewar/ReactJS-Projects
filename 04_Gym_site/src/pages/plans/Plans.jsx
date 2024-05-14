import React from 'react'
import './plans.css'
import HeaderImage from '../../images/header_bg_4.jpg'
import Header from '../../components/Header'
import { plans } from '../../data'
import Card from '../../UI/Card'
function Plans() {
  return (
    <>
    <Header title='Membership Plans' image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium libero architecto molestiae.
    </Header>
    <section className='plans'>
      <div className="container plans__container">
        {
          plans.map(({id, name, desc, price, features}, index)=>(
            <Card key={index} className='plan'>
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`$${price}`}</h1><h2>/mo</h2>
              <h4>Features</h4>
              {
                features.map(({feature, available, index})=>(
                  <p key={index} className={!available ? 'disabled':null}>{feature}</p>
                ))
              }
              <button className='btn lg'>Choose Plan</button>
            </Card>
          ))
        }
      </div>
    </section>
    </>
  )
}

export default Plans
