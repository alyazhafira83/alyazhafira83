import React, { useState } from 'react'

const ListMenu = () => {
    const [menu, setMenu] = useState([1,1,1,1,1,1,1,1,1,1]);
  return (
    <div className='bg-gradient-to-b from-slate-100 to-white py-10'>
      <div className='max-w-[1300px] px-8 mx-auto'>
        <h3 className='font-medium text-3xl my-5 text-center mb-20'>Daftar Menu</h3>
        <div className='grid sm:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-10'>
            {menu.map((item,index) => (
                <div key={index} className='text-center'>
                    <div className='w-[100px] h-[100px] bg-blue-700 rounded-md mx-auto'></div>
                    <h5 className='font-medium text-lg'>Gacoan Menu</h5>
                    <p>Deskripsi</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ListMenu