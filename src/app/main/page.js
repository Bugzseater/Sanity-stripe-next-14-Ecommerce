// src/app/main/page.js
import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '../globals.css';
import Cart from '@/components/Cart';
import HeroBanner from '@/components/HeroBanner';
import { client } from '../../../lib/client';
import Product from '@/components/Product';
import FooterBan from '@/components/FooterBan';

// Function to fetch products
const fetchProducts = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  return products;
};

// Function to fetch banner data
const fetchBanner = async () => {
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return bannerData;
};


// Main component function
const Main = async () => {
  // Fetch data
  const products = await fetchProducts();
  const bannerData = await fetchBanner();

  return (
    <div>

      <Navbar/>

      <HeroBanner heroBanner = {bannerData.length && bannerData[0]} />

      {console.log(bannerData)}

      

      <div className="products-heading">
        <h2>Best Selling Product</h2>
        <p>Speaker of my veriation</p>
      </div>

      <div className="products-container">
        {/* {products.map((product) => (
          <div key={product._id}>{product.name}</div>
        ))} */}
        {products?.map((product) => <Product key={product.id} product={product}/> )}
      </div>

      <FooterBan footerBanner= {bannerData && bannerData[0]}/>

          <Footer/>
      
    </div>
  );
};

export default Main;
