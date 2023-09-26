import React from 'react'
import Middle from '../assets/MainPicture.png'

export default function Home() {
  return (
    <>
    <div className='flex text-left'>
    {/* Text Content */}
    <div className='flex-1 mt-40'>
    <h1 className='font-bold text-2xl'>WE ARE SECURING YOUR BETS</h1>
    <p className='text-lg'>We have redefined the world of stream betting by bridging the gap between bettors.<br/>    
        Our innovative platform offers a seamless and secure way to enhance your betting experience like never before.
        <br/>We are prioritizing the security of our bettors.
    </p>
    </div>

    {/* Image */}
    <div className='flex-1'>
    <img src={Middle} alt='Middlemnan' width='500px' height='500px'/>
    </div>

    </div>
    </>
  );
}
