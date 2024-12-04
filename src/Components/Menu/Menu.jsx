import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const nav = useNavigate(); 
  const admin = localStorage.getItem('admin'); 

  function handlehome() {
    nav('/');
  }
  function handlekurs() {
    nav('/kurs');
  }
  function handlekurslar() {
    nav('/kurslar');
  }
  function handleloginyarat() {
    nav('/loginqoshish');
  }
  function handleuser() {
    nav('/Nastroyki');
  }
  function handletopshiriq() {
    nav('/Topshiriq');
  }
  function handlevazifa() {
    nav('/vazifa');
  }

  return (
    <div className="ml-auto mr-auto max-w-[1400px] absolute">
      <div className="drawer drawer-mobile h-screen">
        
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          defaultChecked
        />
        <div className="drawer-content">
          <button className="btn bg-purple-900">
            <label htmlFor="my-drawer">
              <i className="fas fa-bars"></i>
            </label>
          </button>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-[550px] bg-base-100 text-base-content mt-20">
            
            <label htmlFor="my-drawer" className="drawer-overlay">
              <span className="absolute top-2 right-2 text-2xl font-bold cursor-pointer text-white">
                X
              </span>
            </label> 
            <br />

           
            {admin === 'admin' ? (
              <>
                <li onClick={handlehome}><a href="#">Home</a></li>
                <li onClick={handlekurs}><a href="#">Kurs</a></li>
                <li onClick={handleuser}><a href="#">User</a></li>
                <li onClick={handlekurslar}><a href="#">Kurslar</a></li>
                <li onClick={handleloginyarat}><a href="#">Login yarat</a></li>
                <li onClick={handletopshiriq}><a href="#">Topshiriq</a></li>
                <li onClick={handlevazifa}><a href="#">Vazifa</a></li>
              </>
            ) : (
              <>
                <li onClick={handlehome}><a href="#">Home</a></li>
                <li onClick={handlekurs}><a href="#">Kurs</a></li>
                <li onClick={handleuser}><a href="#">User</a></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
