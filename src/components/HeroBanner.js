import React from 'react';
import '../app/globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        
          <Image
            src=''
            alt='headphone'
            className='hero-banner-image'
          />

        <div>
          <Link href={`/product/${heroBanner.productId}`}>
            <button type='button'>BUTTON TEXT</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>{heroBanner.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
