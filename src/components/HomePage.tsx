import React from 'react'
//import axios from 'axios'
import ProductCard from './ProductCard'
//import { useGetProductsQuery } from '../redux/services/aliexpress'
//import { useEffect, useState } from 'react'
//import { useDispatch } from 'react-redux'


const HomePage = ({ products }) => {
  //const { data, isFetching, error, refetch} = useGetProductsQuery()


  return (
    <div className='bg-blue-100 mx-12'>
    <div className='flex flex-row pt-40 w-fullm mb-12'>
       <h1 className="font-bold text-2xl mx-10 mt-10 w-2/3">Find your next favorite thing!</h1> 
        <p className='w-full mx-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, enim molestiae. Repellat earum perspiciatis nesciunt iure itaque, dicta, asperiores officiis neque ad alias sunt voluptates quaerat reprehenderit possimus exercitationem quasi.</p>
      </div>
      <div className='flex flex-row w-full my-10 mx-10'>
        <form className='w-2/3 ml-44 justify-items-center'>
          <button className='bg-blue-500 border-blue-800 border hover:bg-blue-700 transition-all hover:ease-out text-white font-bold py-1 px-12 rounded-full white-space:nowrap mt-8 mr-4'>Search</button>
          <input className='w-2/3 p-3 focus-within: text-left'></input>
          <select className='w-1/12 ml-2'>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
            <option value="new">New</option>
            <option value="best_seller">Bestseller</option>
          </select>
        </form>
        </div>
        
      <div className='grid grid-cols-1 lg:max-w-6xl lg:ml-44 sm:grid-cols-3 lg:grid-cols-5 gap-6 gap-x-0'>
      {products.length > 0 && products.map((product) => 
        <ProductCard product={product} key={product.id} />  
    ) || <p>Loading...</p>}
      
    
    </div>
    </div>
  )
}

export default HomePage