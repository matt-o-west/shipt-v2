import React, { ButtonHTMLAttributes, useEffect } from 'react'
import './ProductPage.css'
//import { useState } from 'react'
//import axios from 'axios'
import { useParams } from 'react-router-dom'
import { incrementQuantity, decrementQuantity, addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

const ProductPage = ({ products }) => {
  const params = useParams()
  const dispatch = useDispatch()
  
  const product = products.filter((product) => product.id === params.id)
  
  const { name, averageRating, numberOfReviews, availabilityStatusV2, priceInfo, imageInfo, quantity } = product[0]
  const { thumbnailUrl } = imageInfo
  const { priceString } = priceInfo.currentPrice
  

  return (
    <>
      <div className='page'>
        <div className='productImage'>
          <img className='main-img' src={thumbnailUrl} />
          </div>
           {/*<div className='gallery'>
          <img
            className='galleryImage'
            src='image-product-1-thumbnail.jpg'
            alt='thumbnail image 1'
            id='1'
          />
          <img
            className='galleryImage'
            src='image-product-2-thumbnail.jpg'
            alt='thumbnail image 2'
            id='2'
          />
          <img
            className='galleryImage'
            src='image-product-3-thumbnail.jpg'
            alt='thumbnail image 3'
            id='3'
          />
          <img
            className='galleryImage'
            src='image-product-4-thumbnail.jpg'
            alt='thumbnail image 4'
            id='4'
          />
          </div>*/}
        <div className='productInfo'>
          <h1>{name}</h1>
          <div className="flex items-center mb-6">
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <p className="ml-2 text-sm font-bold text-gray-900">{averageRating}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline">{numberOfReviews} reviews</a>
          </div>
          <p id='description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta mollitia incidunt error nulla, animi dolores ipsa culpa! Amet ullam veritatis quo vel? Necessitatibus dolore excepturi adipisci cupiditate! Itaque, maxime aperiam.
          </p>
          <p id='price'>{priceString}</p>
          <p id='strikethrough'>$list price</p>
          <div className='grid grid-cols-2'>
          <button className='flex-nowrap col-span-1 bg-blue-500 border-blue-800 border hover:bg-blue-700 transition-all hover:ease-out text-white font-bold py-2 px-4 rounded-full white-space:nowrap mt-8' onClick={() => dispatch(addToCart(product))}>Add to cart</button>
          </div>
          </div>
      </div>
    </>
  )
}

export default ProductPage
