import React from 'react'
import { Carousel } from 'antd';

export const Slider = () => {
    const contentStyle = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
    
  return (
    <>
    <div className='w-[75%] m-auto mb-4'>
    <Carousel arrows infinite={false}>
      <div>
        <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_250923_400.jpg?tr=w-1920,q=80" alt="" />
        
      </div>
      <div>
        <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_250923_400.jpg?tr=w-1920,q=80" alt="" />
       
      </div>
      <div>
        <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_250923_400.jpg?tr=w-1920,q=80" alt="" />
        </div>
      <div>
        <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250923_400.jpg?tr=w-1920,q=80" alt="" />
        
      </div>
    </Carousel>
     <h1 className='py-2'>bigbasket – online grocery store</h1>
     <p className='py-2 font-thin'>Did you ever imagine that the freshest of fruits and vegetables, top-quality pulses and food grains, dairy products, and hundreds of branded items could be handpicked and delivered to your home, all at the click of a button? In today's fast-paced world, bigbasket.com, India's pioneering online grocery store, continues to bring a staggering array of over 40,000 products from more than 1,000 brands to the doorsteps of over 10 million satisfied customers. From essential household cleaning products to the latest beauty and makeup trends, bigbasket remains your one-stop shop for daily needs</p>
     <p className='py-2 font-thin'>In these times, we've eliminated the stress associated with shopping for daily essentials. You can now effortlessly order all your household products and groceries online. Plus, the added convenience of finding all your requirements at a single source, coupled with substantial savings, demonstrates that bigbasket, India's largest online supermarket, has transformed the way we shop for groceries. Online grocery shopping has become second nature. And when it comes to freshness, whether it's fruits and vegetables or dairy and meat, we've got you covered! Easily obtain fresh eggs, meat, fish, and more with just a few clicks.</p>
     <p className='py-2 font-thin'>We now serve 300+ cities and towns across India and ensure swift delivery times, guaranteeing that all your groceries, snacks and branded foods reach you on time.</p>
     <p className='py-2 font-thin'>Slotted Delivery: Choose the most convenient delivery slot to receive your groceries, ranging from early morning delivery for early birds to late-night delivery for those on the night shift. bigbasket caters to every schedule.</p>
     <p className='py-2 font-thin'>Instant delivery from bbnow: In response to the ever-increasing demand for convenience, bbnow by bigbasket offers lightning-fast grocery delivery, ensuring that your essentials are at your doorstep within 15-30 minutes. Our quick delivery service has revolutionized the way you shop for groceries. Choose from 5000+ grocery essentials. bbnow is available only in select cities.</p>
     <p className='py-2 font-thin'>Whether it's a last-minute dinner party or you simply need something urgently, we've got you covered. This service exemplifies our commitment to providing you with not just the widest range of products but also the fastest and most efficient shopping experience, making bigbasket.com the go-to destination for all your immediate grocery needs.</p>
    </div>
    </>
  )
}
