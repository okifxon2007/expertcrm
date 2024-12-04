import React from 'react'
import Header from '../Components/Header/Header'
import Menu from '../Components/Menu/Menu'
import Kurslarcomp from '../Components/Kurslarcomp/Kurslarcomp'
import Usercomp from '../Components/Usercomp/Usercomp'

const Nastroyki = () => {
  
  return (
    <div >
      <Header></Header> 

      <div className='flex'>
          <Menu></Menu>
     <Usercomp></Usercomp>
      </div>
    </div>
  )
}

export default Nastroyki