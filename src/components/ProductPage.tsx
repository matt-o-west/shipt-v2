import React, { ButtonHTMLAttributes, useEffect } from 'react'
import './ProductPage.css'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ProductPage = ({  }) => {
  const params = useParams()
  const [ product, setProduct] = useState({})

  //console.log(product)

  const options = {
    method: 'GET',
    url: 'https://aliexpress-datahub.p.rapidapi.com/item_detail',
    params: {itemId: `${params.id}`},
    headers: {
      'X-RapidAPI-Key': '81c7ff456emsh15dd1877c019034p1c55acjsn3e24de972fd9',
      'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
    }
  };

  useEffect(() => {
      
  axios.request(options).then(function (response) {
    console.log(response.data);
    setProduct(response.data)
  }).catch(function (error) {
    console.error(error);
  });

  }, [])



  return (
    <>
      <div className='page'>
        <div className='productImage'>
          <img className='main-img' src='' />
        </div>
        <div className='gallery'>
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
        </div>
        <div className='productInfo'>
          <h1>Limited Edition Sneakers</h1>
          <p id='description'>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <p id='price'>$125.00</p>
          <p id='strikethrough'>$250.00</p>
        </div>
      </div>
    </>
  )
}

export default ProductPage
