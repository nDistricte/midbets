import React from 'react'
import Background from './background'

 
export default function Register() {
    
  return (
    <>
    <Background/>
    <div className='min-h-screen ml-14 flex items-center justify-center'>
    <div className='bg-white p-8 rounded-lg shadow-md w-96'>
    <h2 className='text-2xl font-semibold mb-6'>Register</h2>
    <form className='mb-2'>
    <label htmlFor='Username' className='block text-gray-600'>Username</label>
    <input 
    type='text'
    id='Username'
    name='Username'
    className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:to-blue-500'
    placeholder='Your Username'
    required 
    />
    <label htmlFor='email' className='block text-gray-600'>Email</label>
    <input 
    type='email'
    id='email'
    name='email'
    className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:to-blue-500'
    placeholder='Your Email'
    required 
    />
    
    <label htmlFor='DoB' className='block text-gray-600'>Date of Birth</label>
    <input
    type='date'
    id='DoB'
    name='DoB'
    className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:to-blue-500'
    />
    <label htmlFor='Password' className='block text-gray-600'>Password</label>
    <input 
    type='password'
    id='Password'
    name='Password'
    className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:to-blue-500'
    placeholder='Your Password'
    required 
    />
    <label htmlFor='ConPassword' className='block text-gray-600'>Confirm Password</label>
    <input 
    type='password'
    id='ConPassword'
    name='ConPassword'
    className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:to-blue-500'
    placeholder='Confirm Password'
    required 
    />        
    <div className='mb-4'></div>
    <button
    type='submit'
    className='w-full bg-blue-500 py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300'
    >Register</button>
    </form>
    </div>    
    </div>
    </>
  )
}

