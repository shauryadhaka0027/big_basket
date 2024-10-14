import React, { useState } from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaCompass } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Login from '../../Pages/Login/Login';
import { FloatButton } from 'antd';
import { FaBagShopping } from "react-icons/fa6";
import { useZustand } from '../../Zustand/useZustand';

const Navbar = () => {
    const checkValidate=JSON.parse(localStorage.getItem("token"))
    const [onClickLogin,setOnClickLogin] =useState(false)
    const {productArr}=useZustand()

    const login=()=>{
        setOnClickLogin(!onClickLogin)
      
    }
  return (
    <>
      {/* Main Container */}
      <div className='shadow-lg w-[99%] m-auto relative'>
        {onClickLogin && <Login flag={onClickLogin} setFlag={setOnClickLogin}/>} 
        {/* Fixed Top Navbar */}
        <div className='flex justify-center items-center px-4 py-2 h-16 fixed top-0 left-0 w-full bg-white z-[1000]  gap-10'>
          {/* Logo Section */}
          <div className='flex items-center'>
            <Link to="/">
            <img
              className='h-12'
              src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b0/7e/e6/b07ee6af-6b7a-931e-6756-6c2daa4ef2e6/AppIcon-0-0-1x_U007emarketing-0-8-0-0-85-220.png/1200x600wa.png"
              alt="logo"
            />
            </Link>
          
          </div>

          {/* Search Input Section */}
          <div className='flex-1 max-w-[48%]'>
            <input
              className='w-full h-10 px-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              type="text"
              placeholder="Search..."
            />
          </div>

          {/* Location & Login Section */}
        {!checkValidate ?   <div className='flex items-center'>
            <h1 className='bg-[#e2e2e2] flex rounded-sm h-10 items-center px-2'>
              <FaCompass size={21} className='mt-1 mx-2' /> Set Location
            </h1>
            <button onClick={login} className='bg-black text-white mx-2 w-20 text-sm'>
              Login/Sign Up
            </button>
            </div>:(<>
              <div className='flex items-center relative'>
              <Link to="/cart">
              <FloatButton className='absolute top-0 left-24' badge={{ count: productArr?.length}} icon={<FaBagShopping/>} />
              </Link>
              <button onClick={login} className='bg-black text-white mx-2 w-20 text-sm h-10'>
              Logout
            </button>
            </div>
            </>)
        }

        </div>

        {/* Second Section (Categories) */}
        <div className='flex justify-between h-12 w-[73%] m-auto mt-20'> 
          <ul className='flex gap-20 items-center'>
            <li className='bg-[#5dbc5d] text-white h-9 p-2 rounded-md flex text-[12px]'>
              Shop by Category <MdOutlineArrowDropDown className='text-2xl' />
            </li>
            <li>Exotic Fruits</li>
            <li>Tea</li>
            <li>Ghee</li>
            <li>Nandini</li>
            <li>Fresh Vegetables</li>
          </ul>

          {/* Icons Section */}
          <div className='flex items-center'>
            <img className='h-8' src="https://www.bigbasket.com/media/uploads/banner_images/Smart_basket-250124-1.png" alt="Smart Basket" />
            <img className='h-8' src="https://www.bigbasket.com/media/uploads/banner_images/hp_cmc_m_offer_28_220921_all.png" alt="Offers" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
