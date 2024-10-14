import React from 'react'
import { Carousel } from 'antd';

const ImageSlider = () => {
    const contentStyle = {
        height: '60px',
        padding:"10px",
        // color: '#fff',
        lineHeight: '10px',
        // textAlign: 'center',
        // borderRadius: '10px',
        // fontSize: '18px',
        // fontWeight: 'bold',
    
        // color: '#fff',
      };
  return (
    <>
    <div className='w-[75%] m-auto my-2 rounded-lg'>
     <Carousel autoplay>
    <div >
        <img className='rounded-lg'  src="https://www.bigbasket.com/media/uploads/banner_images/IBBN092113357-26110.jpg?tr=w-1920,q=80" alt="" />
      {/* <h3 style={contentStyle} className='bg-[#f7f3f3]'>offer on Tea</h3> */}
    </div>
    <div>
        <img className='rounded-lg' src="https://www.bigbasket.com/media/uploads/banner_images/IBBN092113357-26109.jpg?tr=w-1920,q=80" alt="" />
      {/* <h3 style={contentStyle}>2</h3> */}
    </div>
    <div>
       <img className='rounded-lg' src="https://www.bigbasket.com/media/uploads/banner_images/IBBN092113357-26112.jpg?tr=w-1920,q=80" alt="" />
      {/* <h3 style={contentStyle}>3</h3> */}
    </div>
    <div>
        <img className='rounded-lg' src="https://www.bigbasket.com/media/uploads/banner_images/IBBN092113357-26108.jpg?tr=w-1920,q=80" alt="" />
      {/* <h3 style={contentStyle}>4</h3> */}
    </div>
  </Carousel>
  <div className='flex justify-center my-6'>
   <ul className='gap-20 items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 '>
    <li className='bg-[#dbd7d7] rounded-lg text-center font-bold text-[14px] p-2'>EGGS,MEAT AND FISH</li>
    <li > <img  className='h-14' src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_02.png?tr=w-1920,q=80" alt="" /></li>
    <li className='bg-[#5dbc5d] text-white rounded-lg text-center font-bold h-14 flex items-center p-2'>
        AYURVEDA
    </li>
    <li className='bg-[#dbd7d7] rounded-lg text-center font-bold text-[14px] p-2'>BUY MORE SAVE MORE</li>
    <li className='bg-[#dbd7d7] rounded-lg text-center font-bold text-[14px] p-2'>DEAL OF THE WEEK</li>
    <li className='bg-[#dbd7d7] rounded-lg text-center font-bold text-[14px] p-3'>COMBO STORE</li>
   </ul>
  </div>
  </div>
    </>
  )
}

export default ImageSlider