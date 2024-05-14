import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import './gallery.css'
import { galleryImg } from '../../data'
function Gallery() {
  return (
    <div>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat enim quam esse.
      </Header>
      <section className='gallery'>
        <div className="container gallery__container">
          {
            // images.map((_, index) => (
            //   <article key={index}>
            //     <img src={`./src/images/gallery${index+1}.jpg`} />
            //   </article>
            // ))
            galleryImg.map(({id, image}) => (
              <article key={id}>
                <img src={image} />
              </article>
            ))
          }

        </div>
      </section>
    </div>
  )
}

export default Gallery
