import React, { ButtonHTMLAttributes, useEffect } from 'react'
import './ProductPage.css'
//import { useState } from 'react'
//import axios from 'axios'
import { useParams } from 'react-router-dom'

const ProductPage = ({ products }) => {
  const params = useParams()
  console.log(params)
  const product = products.filter((product) => product.id === params.id)
  console.log(product)
  const { name, averageRating, numberOfReviews, availabilityStatusV2, currentPrice } = product[0]

  

  return (
    <>
      <div className='page'>
        <div className='productImage'>
          <img className='main-img' src='' />
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
          <p id='description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta mollitia incidunt error nulla, animi dolores ipsa culpa! Amet ullam veritatis quo vel? Necessitatibus dolore excepturi adipisci cupiditate! Itaque, maxime aperiam.
          </p>
          <p id='price'>$125.00</p>
          <p id='strikethrough'>$250.00</p>
        </div>
      </div>
    </>
  )
}

export default ProductPage
