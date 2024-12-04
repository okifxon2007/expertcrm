import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const nav = useNavigate()
  function handlehome(){
    nav('/')
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-purple-800">Kirish</h2>
        
        <label htmlFor="id" className="block text-gray-700 font-medium mb-2">
          ID raqam (misol: ID18237)
        </label>
        <input
          id="id"
          type="text"
          placeholder="ID Raqamingizni kiriting"
          className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
          Parol (misol: 61525)
        </label>
        <input
          id="password"
          type="password"
          placeholder="Parolni kiriting"
          className="w-full p-3 border rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        <button
        onClick={handlehome}
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition duration-300"
        >
          Kirish
        </button>
      </form>
    </div>
  );
};

export default Login;
