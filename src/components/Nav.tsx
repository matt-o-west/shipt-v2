import './Nav.css'
//import { Box } from '@material-ui/core'
//import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Nav = () => {
  const cart = useSelector((state) => state.cart)
  const cartTotal = cart.reduce((acc, item) => acc + item.quantity, 0)
  console.log(cartTotal)

  return (
    <nav className='bg-blue-200 border-b-2 border-black'>
      <Link to='/'><img src='/public/logo.svg' alt='company logo' className='p-10 mr-10' /></Link>
      <NavLink
        className='link'
        to='/products'
      >
        Products
      </NavLink>
      <NavLink  className='link' to='/about'>
        About
      </NavLink>
      <NavLink className='link' to='/contact'>
        Contact
      </NavLink>
      <div className='ui'>
        <div className='cart' />
        <img src='/icon-cart.svg' alt='cart' id='cart' />
        <p className='font-normal text-black'>{cartTotal}</p>
        <img src='/image-avatar.png' alt='avatar' id='avatar' className='m-6' />
      </div>
    </nav>
  )
}

export default Nav
