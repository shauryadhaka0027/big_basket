import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useZustand } from "../../Zustand/useZustand";




const ProductCard = ({ product }) => {
  const{productArr,setProductArr}=useZustand()

  const addCart = async(product) => {
    
      alert("Product added to cart");
      setProductArr([...productArr, product]); // Update cart with new product
  
  };
  return (
    <div className="border rounded-lg p-4 shadow-lg cursor-pointer ">
      <div className="relative py-5">
      <Link to={`/product/${product?._id}`}>
        <img src={product?.image} alt={product?.name} className="w-full h-56 object-cover rounded-lg p-4" />
        </Link>
        <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold py-1 px-2 rounded">
          {product?.discount}
        </div>
      </div>
      <div className="mt-4 ">
        <h3 className="text-gray-800 text-sm font-medium py-4">{product?.name}</h3>
        <p className="text-lg font-semibold mt-1 py-4">₹{product?.price}</p>
        <p className="text-sm text-gray-500 line-through py-4">₹{product?.originalPrice}</p>
        <select className="mt-2 w-full border border-gray-300  rounded-lg text-sm p-2">
          <option value="1kg " className="bg-white">1 kg</option>
          <option value="500 g " className="bg-white">500 g</option>
        </select>
        <button className="w-full bg-green-100 text-green-700 font-semibold mb-4 py-2 mt-4 rounded-lg">
          Har Din Sasta!
        </button>
        <button className="w-full border-[red] border-2 text-red-500  font-semibold py-2 mt-2 rounded-lg" onClick={()=>addCart(product)}>
          Add
        </button>
      </div>
    </div>
  );
};

const Card = () => {
    const [products,setProducts]=useState([])
    const fetchProducts = () => {
        axios
          .get("http://localhost:9001/product", { withCredentials: true })
          .then((response) => {
            setProducts(response.data.data);
          })
          .catch((error) => {
            console.error(error);
          })
        }    
    useEffect(()=>{
     fetchProducts();
    },[])
  return (
    <>
   
    <div className="container mx-auto px-4 w-[75%] m-auto bg-[#efeeee] py-4">
      <h1 className="text-2xl font-bold mb-6">My Smart Basket</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#fff]">
        {products.map((product) => (
          
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Card;
