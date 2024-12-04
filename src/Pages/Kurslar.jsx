import React from 'react'
import Header from '../Components/Header/Header'
import Menu from '../Components/Menu/Menu'
import Kurslarcomp from '../Components/Kurslarcomp/Kurslarcomp'

const Kurslar = () => {
  
  return (
    <div >
      <Header></Header> 

      <div className='flex'>
          <Menu></Menu>
     <Kurslarcomp></Kurslarcomp>
      </div>
    </div>
  )
}

export default Kurslar