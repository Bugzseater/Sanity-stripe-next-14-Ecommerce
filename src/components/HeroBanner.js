import React from 'react';
import '../app/globals.css';
import Link from 'next/link';
import Image from 'next/image';

const HeroBanner = ({ heroBanner}) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        
        <Image
            src=''
            alt='headphone'
            className='hero-banner-image'
            width={500}  // Set appropriate width
            height={300} // Set appropriate height
            layout='responsive'
          />

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
