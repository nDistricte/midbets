import React from 'react'
import Background from './background.js'
import './ScrollBar.css';

function ComTickets() {
  return (
    <>
    <Background/>
    <div className='min-h-screen ml-14 flex items-center justify-center'>
    <div className='bg-black border rounded-lg shadow-md w-96'>
        
        <h2 className='text-white text-lg text-center'>Community Tickets</h2>
        <h1 id='ticketID' className='text-gray-300 text-center'>ID-12345678</h1>
        
        <div className='text-white m-10 max-w-sm'>
        <label className='text-lg font-bold'>Message</label>
        <h3 className='mb-2'>Please answer as detailed as possible if needed.</h3>
        <textarea 
        type='text' 
        className='w-72 h-24 text-sm text-black pt-2 pl-2 row-start-5 border border-gray-300 resize-y break-all custom-scrollbar'
        placeholder='Please insert the URL for proof...'
        ></textarea>
        </div>




        <div className='text-white m-10'>
        <label className='text-lg font-bold'>Proof</label>
        <h3 className='mb-2'>Proofs are needed to receive the middis otherwise it will be Cancelled.</h3>
        <input type='text' className='w-72 text-sm h-7 text-black' placeholder='Please insert the URL for proof...'
        />
        </div>

    </div>
    </div>
    </>
    
  )
}

export default ComTickets