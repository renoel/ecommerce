import React from 'react';
import { Product, FooterBanner, HeroBanner} from '../components'

export default function Home() {
  return (
    <>
      <HeroBanner />
      <h2 className='products-heading'>Best selling products</h2>
      <p>Speakers of many variations</p>

      <div className='products-container'>
        {['Product1', 'product2'].map(
          (product) => product)}
      </div>
      <FooterBanner />
    </>
  )
}

