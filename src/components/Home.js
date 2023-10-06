import React from 'react';
import Middle from '../assets/MainPicture.png';
import "./Background.css";
import Background from './background.js'

export default function Home() {
  return (
    <>
     <Background/>

        <div className='flex text-left'>
      {/* Text Content */}
      <div className='flex-1 mt-48'>
      <h1 className='font-bold text-2xl text-white'>WE ARE SECURING YOUR BETS</h1>
      <p className='text-lg text-white'>We have redefined the world of stream betting by bridging the gap between bettors.<br/>    
        Our innovative platform offers a seamless and secure way to enhance your betting experience like never before.
        <br/>We are prioritizing the security of our bettors.
    </p>
    </div>

    {/* Image */}
    <div className='flex-1 mt-32'>
    <img src={Middle} alt='Middlemnan' width='500px' height='500px'/>
    </div>

    </div>


      
    </>
  );
}
