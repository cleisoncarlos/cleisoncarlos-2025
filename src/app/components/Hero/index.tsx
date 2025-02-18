import React from 'react'
import Social from '../Social'

export default function Hero() {
  return (
  <section className='bg-dark-900'>
    <div className="container">
        <div className="row py-5">
            <div className="col-lg-4 text-white">

                <h5>Hello, I'm</h5>
                <h1 className='fw-bold display-3'>Lorem Ipsum <span className='text-red'>Dolor</span></h1>
                <h3>Lorem Ipsum Dolor</h3>
                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quod, excepturi exercitationem omnis, magni laborum tenetur sequi molestiae similique beatae, possimus laudantium deserunt eaque animi! Explicabo nihil amet rerum ex.</p>
          <Social/>
          
          
            </div>

            <div className="col-lg-8">
                <img src="/hand.png" className='img-fluid' alt="" />
            </div>
        </div>
    </div>
  </section>
  )
}
