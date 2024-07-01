import React from 'react';
import '../app/globals.css';
import Link from 'next/link';

const HeroBanner = ({ heroBanner}) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <img src='' alt='headphone' className='hero-banner-image'></img>

        <div>
          <Link href="/product/ID">

            <button type='button'>BUTTON TEXT</button>
          
          </Link>

          <div className='desc'>
            <h5>Description</h5>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default HeroBanner
