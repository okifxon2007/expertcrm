import React from 'react'
import Header from '../Components/Header/Header'
import Menu from '../Components/Menu/Menu'
import Kurscomp from '../Components/Kurscomp/Kurscomp'

const Kurs = () => {
  return (
    <div >
      <Header></Header> 

      <div className='flex'>
          <Menu></Menu>
     <Kurscomp></Kurscomp>
      </div>
    </div>
  )
}

export default Kurs