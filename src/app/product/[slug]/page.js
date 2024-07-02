// src/app/product/[slug]/page.js
import React from 'react';
import { client, urlFor } from '../../../../lib/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import '../../globals.css';
import Product from '@/components/Product';

const ProductDetails = async ({ params }) => {
  const { slug } = params;
  const query = `*[_type == "product" && slug.current == "${slug}"][0]`;
  const product = await client.fetch(query);

  const fetchProducts = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
    return products;
  };

  if (!product) return <div>Loading...</div>;
  const products = await fetchProducts();

  return (
    
    <div>
        <Navbar />
        <div className='hi'>
        <div className="product-detail-container">
              <div className="image-container">
                  <img src={urlFor(product.image && product.image[0]).url()} alt={product.name}
                  className='product-detail-image' />
              </div>

              <div className="small-images-container">
                {product.image?.map((item, i) => (
                <img
                    key={i}
                    src={urlFor(item).url()}
                    alt={product.name}
                    className="small-image"
                />
                ))}
              </div>
        </div>

        <div className="product-detail-desc">
                  <h1>{product.name}</h1>
                  <div className="reviews">
                      <div className='star'>
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiOutlineStar />
                      </div>
                      <p>
                          (20)
                      </p>
                  </div>
                  <h4>Details: </h4>
                  <p>{product.details}</p>
                  <p className="price">${product.price}</p>
                  <div className="quantity">
                      <h3>Quantity:</h3>
                      <p className="quantity-desc">
                          <span className="minus" onClick=''><AiOutlineMinus /></span>
                          <span className="num">qty</span>
                          <span className="plus" onClick=''><AiOutlinePlus /></span>
                      </p>
                  </div>
                  <div className="buttons">
                      <button type="button" className="add-to-cart" onClick=''>Add to Cart</button>
                      <button type="button" className="buy-now" onClick=''>Buy Now</button>
                  </div>
        </div>
        </div>

        <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          {/* Assuming you want to show related products */}
          <div className="maylike-products-container ">
          {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
          </div>

        </div>

      <Footer />

    </div>

  );
};

export default ProductDetails;