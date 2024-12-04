import React from 'react'

const Header = () => {
  return (
    <div className='bg-purple-950 h-[75px]'>
    <div className='ml-auto mr-auto max-w-[1400px]'>
   <div className='flex justify-between'>
   <h1 className='text-white text-3xl pt-4'> <i class="fas fa-mortar-board"></i>Expert</h1>
   <button className='w-32 h-10 rounded-lg text-white border-2 border-white mt-4'>Logout</button>
   </div>
    </div>
    </div>
  )
}

export default Header