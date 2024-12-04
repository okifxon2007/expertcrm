import React from 'react'
import imgone from '../../img/oqituvchi1.jpg'
import imgtwo from '../../img/imgtwoo.jpg'
import imgthree from '../../img/imgthree.jpg'
import imgfor from '../../img/shoxsuvor.jpg'
const Homecomp = () => {
  return (
    <div className='ml-auto mr-auto max-w-[1400px]'> 
    <h1 className='text-white text-3xl pt-4 text-center'> <i class="fas fa-mortar-board"></i>Expert</h1> <br />
    <p className='text-center'>Salom, hurmatli ota-ona!
Bizning Ekspert O'quv Markazimiz — bu sifatli ta’lim va o‘ziga ishonchli kelajak garovidir. Markazimizda biz faqatgina ingliz tiliga ixtisoslashganmiz, bu esa ta’lim sifati va darslarni mukammal olib borish imkonini beradi.

Farzandingiz uchun: Bizda faqat zamonaviy metodika, qiziqarli darslar va malakali o‘qituvchilar bor. Har bir dars farzandingiz uchun o‘yinlar va interaktiv mashg‘ulotlar orqali oson va qiziqarli bo‘ladi.
O‘zingiz uchun: Biz kattalar uchun maxsus kurslar ham taklif qilamiz. Siz qisqa muddat ichida so‘zlashuv tilini rivojlantirishingiz va ish yoki safarlar uchun tayyor bo‘lishingiz mumkin.
Markazimizda har bir talaba o‘z maqsadi va darajasiga qarab individual yondashuvga ega bo‘ladi. Agar farzandingiz yoki o‘zingizni ro‘yxatdan o‘tkazmoqchi bo‘lsangiz, bizning birinchi darsimiz mutlaqo bepul!</p>
<br />
<div className='flex flex-wrap gap-10 justify-center'>

<div className="flex flex-col items-center p-6 bg-white shadow-xl rounded-lg w-80">
      <div className="flex justify-center mb-4">
        <img
          src={imgfor}  
          alt="User profile"
          className="w-[150px] h-[150px] rounded-full border-4 border-purple-500 shadow-lg"
          loading="lazy"
        />
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">To'lanboyev</h2>
      <h3 className="text-lg text-gray-600 mb-1">Shoxsuvor</h3>
      <h3 className="text-sm text-gray-500">25.03.1995</h3>
    </div>

    <div className="flex flex-col items-center p-6 bg-white shadow-xl rounded-lg w-80">
      <div className="flex justify-center mb-4">
        <img
          src={imgtwo}  
          alt="User profile"
          className="w-[150px] h-[150px] rounded-full border-4 border-purple-500 shadow-lg"
          loading="lazy"
        />
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Ochilboyev</h2>
      <h3 className="text-lg text-gray-600 mb-1">Abduraxim</h3>
      <h3 className="text-sm text-gray-500">02.10.2006</h3>
    </div>

    
    <div className="flex flex-col items-center p-6 bg-white shadow-xl rounded-lg w-80">
      <div className="flex justify-center mb-4">
        <img
          src={imgthree}  
          alt="User profile"
          className="w-[150px] h-[150px] rounded-full border-4 border-purple-500 shadow-lg"
          loading="lazy"
        />
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Shodmonov</h2>
      <h3 className="text-lg text-gray-600 mb-1">Xusniddin</h3>
      <h3 className="text-sm text-gray-500">07.11.2006</h3>
    </div>

   
    <div className="flex flex-col items-center p-6 bg-white shadow-xl rounded-lg w-80">
      <div className="flex justify-center mb-4">
        <img
          src={imgone}  
          alt="User profile"
          className="w-[150px] h-[150px] rounded-full border-4 border-purple-500 shadow-lg"
          loading="lazy"
        />
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Miradbdullayeva</h2>
      <h3 className="text-lg text-gray-600 mb-1">Barno</h3>
      <h3 className="text-sm text-gray-500">09.27.2006</h3>
    </div>
</div>



    </div>
  )
}

export default Homecomp