import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlinePinterest } from "react-icons/ai";
const Footer = () => {
  return (
   <>
   <div className='bg-black text-white flex justify-evenly w-full py-10 '>
    <div className='px-5'>
        <h3 className='py-4'>Big Basket</h3>
        <ul className='flex gap-5 flex-col text-[12px]'>
            <li>About Us</li>
            <li>Become A bigbasket Rider</li>
            <li>In News</li>
            <li>Green bigbasket</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Careers At bigbasket</li>
            <li>bb Instant</li>
            <li>bb Daily</li>
        </ul>
    </div>
    <div>
        <h3 className='py-4'>Help</h3>
        <ul className='flex gap-5 flex-col text-[12px]'>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>bb Wallet FAQs</li>
            <li>bb Wallet T&Cs</li>
            <li>Vendor Connect</li>
        </ul>
    </div>
    <div>
        <img className='h-32' src="https://www.greatplacetowork.in/great/api//assets/uploads/11851/logo/logo.png" alt="" />
        <div className='flex gap-5'>
            <img className='h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbGWqT8cgydYAGtal_21-CCL1qPEjc3Ot4Wg&s" alt="" />
            <img className='h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeNXpjnrGgiWcKjb5LV116jTOlsoao6uuLzerdF8lo5z1MKur2ePwFjS7w8YzZYTeUVg&usqp=CAU" alt="" />
        </div>
        <ul className=' flex py-8  gap-11 cursor-pointer'>
            <li className='text-2xl hover:bg-slate-400'><TiSocialFacebook /></li>
            <li className='text-2xl hover:bg-slate-400'><FaInstagram /></li>
            <li className='text-2xl hover:bg-slate-400'><FaTwitter /></li>
            <li className='text-2xl hover:bg-slate-400'><AiOutlinePinterest /></li>
        </ul>
    </div>
   </div>
   </>
  )
}

export default Footer