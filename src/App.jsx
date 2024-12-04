import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Kurs from './Pages/Kurs'
import Kurslar from './Pages/Kurslar'
import Login from './Pages/Login'
import Loginqosh from './Pages/Loginqosh'
import Nastroyka from './Pages/Nastroyka'
import Topshiriq from './Pages/Topshiriq'
import Vazifa from './Pages/Vazifa'
import Error from './Pages/Error'

function App() {
  const admin = localStorage.getItem('admin'); 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/kurs' element={<Kurs />}></Route>
        <Route path='/Nastroyki' element={<Nastroyka />}></Route>


        {admin === 'admin' && (
          <>
            <Route path='/kurslar' element={<Kurslar />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/Loginqoshish' element={<Loginqosh />}></Route>
            <Route path='/Topshiriq' element={<Topshiriq />}></Route>
            <Route path='/Vazifa' element={<Vazifa />}></Route>
          </>
        )}


        {admin !== 'admin' && (
          <>
            <Route path='/kurslar' element={<Kurslar />}></Route>
          </>
        )}

        <Route path='*' element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
