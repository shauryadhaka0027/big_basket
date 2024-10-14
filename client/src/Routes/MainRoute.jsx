import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../Pages/HomePage/HomePage'
import Cart from '../Pages/Cart/Cart'
import ProductPage from '../Pages/ProductPge/ProductPage'


const MainRoute = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product/:id" element={<ProductPage/>} />
     
        

    </Routes>
    
    
    </>
  )
}

export default MainRoute