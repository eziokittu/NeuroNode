import React from 'react'

const Navbar = ({serverActive}) => {
  return (
    <div className='fixed z-10 top-0 h-6 bg-gray-800 w-full px-2 flex flex-row justify-between items-center'>
      <div className='text-sm sm:block hidden'>
        {serverActive ? (
          <p className='text-green-500 font-bold'>Server active 🟢</p>
        ) : (
          <p className='text-red-500 font-bold'>Server loading 🔴</p>
        )}
      </div>
      <div className='text-slate-200 mx-auto text-center'>
        <p className=''>All MODELS - Anuroop - Bodhisatta</p>
      </div>
    </div>
  )
}

export default Navbar