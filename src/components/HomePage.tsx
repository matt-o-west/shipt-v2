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
        <label htmlFor="search" className='px-12'>Search</label>
        <input className='w-2/3'></input>
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