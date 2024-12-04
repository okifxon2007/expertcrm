import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
const Usercomp = () => {
    const nameref = useRef('')
    const surnameref = useRef('')
    const agref = useRef('')
    const [usn, setusn] = useState([])
    const handlesave = () => {
        const mal = {
            name: nameref.current.value,
            surname: surnameref.current.value,
            age: agref.current.value
        };

       if (nameref.current.value && surnameref.current.value && agref.current.value.length > 4 || nameref.current.value && surnameref.current.value && agref.current.value.length < 15 || agref.current.value == Number) {
        localStorage.setItem('user', JSON.stringify(mal));
        console.log(mal);
        nameref.current.value = ''
        agref.current.value = ''
        surnameref.current.value = ''
       }else{
       alert('Siz 4tadan kop va 10tadan 15 tadan kam soz kiritishingiz kerak va sana oy yil 10.10.2000 shunday korinishda bolishi kerak')
       }
       
    };
    useEffect(() =>{
        const parse = localStorage.getItem('user')
        if (parse) {
            setusn(JSON.parse(parse))
        }
    },[])

  return (
    <div className="min-h-screen flex items-center justify-center ml-auto mr-auto">
      <div className="bg-white shadow-lg rounded-lg p-8 w-80">
        <div className="flex justify-center mb-4">
          <img
            src="https://images.unsplash.com/photo-1561948959-b31f1185685c"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-purple-500"
            loading='lazy'
          />
        </div>
        <div className="text-center">
        
         {
            usn ? (  <div>
                <h1 className="text-2xl font-semibold text-gray-800 mb-1">{usn.name}</h1>
     <h2 className="text-lg text-gray-600 mb-2">{usn.surname}</h2>
     <p className="text-gray-500">{usn.ag}</p>
           </div>):({
            
           })
         }
        </div>
        <form className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
    <label className="block text-black font-semibold mt-4">Ismlarni va familiyani kiriting</label>
    
    <input 
    ref={nameref}
        type="text" 
        placeholder="Ismingiz" 
        className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
    />
    
    <input 
    ref={surnameref}
        type="text" 
        placeholder="Familiyangiz" 
        className="mt-4 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
    />
    
    <input 
    ref={agref}
        type="text" 
        placeholder="Sana (oy, yil)" 
        className="mt-4 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
    />
    
    <button 
    onClick={handlesave}
        type="submit" 
        className="mt-6 w-full p-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
    >
        Saqlash
    </button>
</form>

      </div>
    </div>
  )
}

export default Usercomp
