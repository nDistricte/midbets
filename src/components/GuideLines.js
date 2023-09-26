import React from 'react';

export default function GuideLines() {
  return (
    <>
    <h1 className='text-center font-bold text-xl'>GuideLines</h1>
    <div className='flex flex-wrap'>
    
      <section className="text-xs h-full w-40 border border-gray-300 p-4 m-4 ml-16 mr-10">
        <h2 className='font-bold' id='Works'>How does it work?</h2>
        <p>
          After you are registered, you will receive 100 "middis" to bet.
          You can search for your friend's username and then send him a bet offer.
          The amount, what you are betting for, and what are the guidelines are being defined by you!
          As soon as your friend accepts the offer, the bet will start.
          You will have an option to report who won the bet.
          If one of you disputes, proof will be required.
          Through a community ticket system, the winner will be chosen.
        </p>
      </section>

      <section className="text-xs h-full w-40 border border-gray-300 p-4 m-4 mr-10">
        <h2 className='font-bold' id='CT'>Community Tickets</h2>
        <p>
          The community tickets are made to let the community work/help each other.
          After you are logged in, once you hover your profile, an option called "CommunityT" will appear.
          Tickets will automatically appear, and after the decision of the winner, a new ticket will appear.
          Through every right-decided decision, you will receive 10 "middis".
          The ticket will be closed after 24 hours after the dispute.
          The majority of the winners' pick will receive the "middis".
        </p>
      </section>

      <section className="text-xs w-1/2 md:w-48 h-48 border border-gray-300 p-4 m-4 mr-10">
        <h2 className='font-bold' >Why middis?</h2>
        <p>
          If you have a competitive drive but don't like betting for money.
          This is the solution, a currency not based on real money.
          You can only earn it through winning bets, helping the community solve the tickets,
          and daily free giving out middis.
        </p>
      </section>

      <section className="text-xs w-1/2 md:w-48 h-48 border border-gray-300 p-4 m-4 mr-10">
        <h2 className='font-bold'>Security and Payments</h2>
        <p>
          Every transaction will be 256-bit encrypted.
          We will accept credit cards, PayPal, and crypto.
          If you wish to add a balance to your account, then click under the option deposit
          and choose your payment method and the amount.
        </p>
      </section>
    </div>
    </>
  );
}
