import React from 'react'
import Header from './components/header'

const App = () => {
  return (
    <div>
      <div className=" min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 bg-teal-950 text-white py-40 flex flex-col items-center justify-center gap-8">
          <h1 className="text-center text-6xl max-w-6xl font-bold tracking-wider leading-[120%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="text-center text-gray-400 text-2xl max-w-6xl font-light tracking-wider leading-[120%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            ex. Rem consectetur atque, aliquid sunt minus perferendis temporibus
            similique soluta autem beatae illum consequatur debitis officiis
            non? Tempore, architecto aperiam!
          </p>
          <button className="bg-teal-900 p-6 rounded-xl transition duration-300 text-2xl font-bold hover:bg-green-600">
            Buy One Cup Of Coffee
          </button>
        </div>
      </div>

      <div className="min-h-screen bg-teal-800 py-40">
        <div className="container mx-auto flex items-center justify-center gap-24">
          <div className='w-full h-full max-w-xl'>
            <img className='w-full h-full object-cover' src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/640px-Starbucks_Corporation_Logo_2011.svg.png" />
          </div>
          <div className=' text-white flex flex-col gap-8'>
            <h2 className="text-4xl  font-bold tracking-wider leading-[120%]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p className=" text-gray-200 text-2xl font-normal tracking-wider leading-[120%]"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis cum quia nobis sed beatae incidunt.</p>
            <p className=" text-gray-200 text-2xl font-normal tracking-wider leading-[120%]"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis cum quia nobis sed beatae incidunt.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App