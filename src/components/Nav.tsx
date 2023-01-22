import './Nav.css'
//import { Box } from '@material-ui/core'
//import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Nav = () => {
  const cartTotal = useSelector((state) => state.cart.length)
  console.log(cartTotal)

  return (
    <nav className='bg-blue-200 border-b-2 border-black'>
      <img src='/logo.svg' alt='company logo' id='logo' />
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
