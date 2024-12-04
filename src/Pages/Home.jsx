import React from 'react'
import Header from '../Components/Header/Header'
import Menu from '../Components/Menu/Menu'
import Homecomp from '../Components/Homecomp/Homecomp'
const Home = () => {
  return (
    <div >
      <Header></Header> 

      <div className='flex flex-wrap'>
          <Menu></Menu>
     <Homecomp></Homecomp>
      </div>
    </div>
  )
}

export default Home