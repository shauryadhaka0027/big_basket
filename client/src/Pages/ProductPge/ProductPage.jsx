import React, { useEffect, useState } from "react";
import img from "../../../src/assets/Screenshot 2024-10-14 083149.png";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useZustand } from "../../Zustand/useZustand";
import Navbar from "../../components/Navbar/Navbar";
export const URL=import.meta.env.VITE_Current_API;
// Ensure correct import (no curly braces)

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const { id } = useParams();

  const { setProductArr, productArr } = useZustand(); // Hook destructuring
  
  console.log("id", id);

  // Fetch product data and populate the images array
  useEffect(() => {
    axios
      .get(`${URL}/product/get/${id}`)
      .then((response) => {
        const data = response.data.data;
        setProduct(data);

        // Populate the images array if available
        const productImages = Array(4).fill(data.image); // Assuming repeated images
        setImages(productImages);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, []);

  const addCart = async(product) => {
    // setProductArr([...productArr, product]); // Update cart with new product
    
       alert("Product added to cart");
       setProductArr([...productArr, product]); // Update cart with new product
    
  };

  console.log("productArr", productArr);

  return (
    <>
    <Navbar/>
      <div className="pt-10 flex justify-center w-[75%] m-auto">
        <div className="flex p-4">
          {/* Left Image Gallery */}
          <div className="w-1/5 space-y-3 pt-3">
            {images.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt="Product"
                className={`cursor-pointer h-20 border ${
                  product?.image === imgSrc
                    ? "border-green-500"
                    : "border-gray-300"
                } rounded-md`}
              />
            ))}
          </div>

          {/* Main Product Image */}
          <div className="border-2 p-8">
            <img
              src={product?.image}
              alt="Selected Product"
              className="border h-[450px] object-cover border-gray-300 rounded-md"
            />
          </div>

          {/* Product Details Section */}
          <div className="w-2/5 px-4">
            <p className="text-sm text-gray-500">Brand name</p>
            <h1 className="text-2xl font-bold">{product?.name}</h1>

            <p className="text-sm text-gray-500 line-through">
              MRP: ₹{product?.originalPrice}
            </p>
            <p className="text-2xl font-semibold text-green-600">
              ₹{product?.price}
            </p>
            <p className="text-sm text-gray-500">Inclusive of all taxes</p>
            <p className="text-green-500 text-sm">You Save: 24% OFF</p>

            {/* Add to basket and Save for later buttons */}
            <div className="flex space-x-4 mt-6">
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                onClick={()=> addCart(product)}
              >
                Add to basket
              </button>
              <button className="border border-gray-400 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100">
                Save for later
              </button>
            </div>

            {/* Earliest delivery */}
            <p className="text-sm text-gray-500 mt-3">
              Earliest: Get it in 3 hrs
            </p>

            {/* Pack Sizes */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Pack sizes</h3>
              <div className="mt-2 space-y-2">
                <div className="flex justify-between items-center border border-green-500 rounded-md px-4 py-2">
                  <span>250 g</span>
                  <span className="text-green-600 font-semibold">
                    ₹48.93 (₹0.2/g)
                  </span>
                </div>
                <div className="flex justify-between items-center border border-gray-300 rounded-md px-4 py-2">
                  <span>100 g</span>
                  <span className="text-green-600 font-semibold">
                    ₹18 (₹0.18/g)
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="text-blue-600 text-sm mt-2 inline-block"
              >
                +1 More Combo
              </a>
            </div>

            {/* Highlights Section */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Highlights</h3>
              <div className="mt-2 text-sm text-gray-500">
                <span className="inline-block px-3 py-1 border border-gray-300 rounded-full">
                  Contain Minimal Aroma
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[75%] m-auto">
        <h2 className="text-center text-2xl">Why Choose Basket</h2>
        <div className="py-6">
          <img src={img} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
