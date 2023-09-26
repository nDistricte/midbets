import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div className='bg-green-700 p-4'>
        <nav className='flex justify-between items-center mx-auto text-white'>
        <a href='/home' className='text-left font-bold'>Midbets</a>
          <ul className='text-center space-x-4 inline-flex'>
            <li><a href='/home'>Home</a></li>
            <li><a href='/AboutUs'>About us</a></li>
            <li><a href='/Help'>Help</a></li>
          </ul>
          <a href='/login' className='text-right'>Login</a>
        </nav>
      </div>
    )
  }
}
