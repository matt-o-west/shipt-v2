import React from 'react'
//import StarRating from './StarRating'
//import { useGetProductsQuery } from '../redux/services/aliexpress'
//import Types from '../types/types'
import { useDispatch } from 'react-redux'
//import { addToCart } from '../redux/cartSlice'
import {Link} from 'react-router-dom'

const ProductCard = ({ product, handleAddToCart }) => {
  console.log(product)
    //const { data, isLoading, error } = useGetProductsQuery()
    //console.log(title)
  //const { freeShipping, shippingFee } = product.delivery
  //const products = product.filter((item) => item.priceInfo.currentPrice.price !== null)
  const { id, fulfillmentSpeed, numberOfReviews, name, priceInfo, imageInfo } = product
  const dispatch = useDispatch()
  //console.log(priceInfo)
  
  console.log(priceInfo)

  const price = priceInfo.currentPrice?.price || priceInfo.listPrice?.price
  const { thumbnailUrl } = imageInfo

  //const dispatch = useDispatch()
  
  const itemTitle = name.split(' ').slice(0, 4).join(' ').trim()


    return (
      <div>
        <Link to={"/products/" + id}>
    <div className='relative max-w-80 h-44 p-4 mx-3 my-2 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-sm cursor-pointer border hover:drop-shadow-xl hover:scale-105 hover:transition-scale hover:ease-in-out hover:duration-150 hover:backdrop-opacity-75'>
                  
                <div className='absolute z-10 inset-0 bg-black/20 rounded-xl transition duration-300'><img src={thumbnailUrl} alt={name} className='object-cover w-full h-full rounded-lg' /></div>
            </div>
            <div className="z-20 text-black font-medium flex-row flex flex-wrap">
          <h1 className='w-2/3 my-2'>{itemTitle}</h1>
          <p className='w-1/3 my-2 font-semibold'>{price}</p>
                <p className='px-4 pl-16'></p>

          </div>
        </Link>
        <button className='flex-nowrap bg-blue-500 border-blue-800 border hover:bg-blue-700 transition-all hover:ease-out text-white font-bold py-1 px-4 rounded-full white-space:nowrap mt-8' onClick={() => dispatch(handleAddToCart())}>Add to cart</button>
        </div>
  )
}

export default ProductCard