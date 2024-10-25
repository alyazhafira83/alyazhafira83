import React, { useState } from 'react'
import Button from '../components/atoms/Button'

const Admin = () => {
    const [isOpen, setIsOpen] = useState(1);
  return (
    <>
        <div className='grid grid-cols-6'>
            <div className='col-span-1 sidebar h-screen bg-[#000036]'>
                <h3 className='font-medium text-xl text-white p-5'>Admin Gacoan</h3>
                <ul className='mt-3 font-medium'>
                    <li onClick={()=>setIsOpen(1)} className='text-white hover:bg-slate-500 cursor-pointer py-2 px-4'>Daftar Antrian</li>
                    <li onClick={()=>setIsOpen(2)} className='text-white hover:bg-slate-500 cursor-pointer py-2 px-4'>Riwayat Antrian</li>
                    <li onClick={()=>setIsOpen(3)} className='text-white hover:bg-slate-500 cursor-pointer py-2 px-4'>Daftar User</li>
                </ul>
            </div>
            <div className='col-span-5 bg-slate-50 p-5'>
                {isOpen == 1 && 
                    <div className="daftar-antrian w-full bg-white rounded-xl p-5 shadow">
                        <div className="header grid grid-cols-6 font-medium text-slate-700 border-b border-slate-500 pb-6">
                            <h6>Nama</h6>
                            <h6>Telepon</h6>
                            <h6>No. Antri</h6>
                            <h6>Mulai Antri</h6>
                            <h6>Estimasi</h6>
                            <h6>Status</h6>
                        </div>
                        <div>
                            <div className="grid flex items-center text-sm grid-cols-6 font-medium text-slate-700 border-b border-slate-500 py-3">
                                <h6>Hikam</h6>
                                <h6>089998777898</h6>
                                <h6>1</h6>
                                <h6>10:00</h6>
                                <h6>10:15</h6>
                                <div className='py-1 px-3 w-[120px] rounded-md text-white bg-orange-500 font-medium cursor-pointer'>
                                    Dalam Antrian
                                </div>
                            </div> 
                            <div className="grid flex items-center text-sm grid-cols-6 font-medium text-slate-700 border-b border-slate-500 py-3">
                                <h6>Hikam</h6>
                                <h6>089998777898</h6>
                                <h6>1</h6>
                                <h6>10:00</h6>
                                <h6>10:15</h6>
                                <div className='py-1 px-3 w-[120px] rounded-md text-white bg-orange-500 font-medium cursor-pointer'>
                                    Dalam Antrian
                                </div>
                            </div> 
                            <div className="grid flex items-center text-sm grid-cols-6 font-medium text-slate-700 border-b border-slate-500 py-3">
                                <h6>Hikam</h6>
                                <h6>089998777898</h6>
                                <h6>1</h6>
                                <h6>10:00</h6>
                                <h6>10:15</h6>
                                <div className='py-1 px-3 w-[120px] rounded-md text-white bg-orange-500 font-medium cursor-pointer'>
                                    Dalam Antrian
                                </div>
                            </div> 
                            <div className="grid flex items-center text-sm grid-cols-6 font-medium text-slate-700 border-b border-slate-500 py-3">
                                <h6>Hikam</h6>
                                <h6>089998777898</h6>
                                <h6>1</h6>
                                <h6>10:00</h6>
                                <h6>10:15</h6>
                                <div className='py-1 px-3 w-[120px] rounded-md text-white bg-orange-500 font-medium cursor-pointer'>
                                    Dalam Antrian
                                </div>
                            </div> 
                            <div className="grid flex items-center text-sm grid-cols-6 font-medium text-slate-700 border-b border-slate-500 py-3">
                                <h6>Hikam</h6>
                                <h6>089998777898</h6>
                                <h6>1</h6>
                                <h6>10:00</h6>
                                <h6>10:15</h6>
                                <div className='py-1 px-3 w-[120px] rounded-md text-white bg-orange-500 font-medium cursor-pointer'>
                                    Dalam Antrian
                                </div>
                            </div> 
                            <div className="grid flex items-center text-sm grid-cols-6 font-medium text-slate-700 border-b border-slate-500 py-3">
                                <h6>Hikam</h6>
                                <h6>089998777898</h6>
                                <h6>1</h6>
                                <h6>10:00</h6>
                                <h6>10:15</h6>
                                <div className='py-1 px-3 w-[120px] rounded-md text-white bg-orange-500 font-medium cursor-pointer'>
                                    Dalam Antrian
                                </div>
                            </div> 
                            <div className="grid flex items-center text-sm grid-cols-6 font-medium text-slate-700 border-b border-slate-500 py-3">
                                <h6>Hikam</h6>
                                <h6>089998777898</h6>
                                <h6>1</h6>
                                <h6>10:00</h6>
                                <h6>10:15</h6>
                                <div className='py-1 px-3 w-[120px] rounded-md text-white bg-orange-500 font-medium cursor-pointer'>
                                    Dalam Antrian
                                </div>
                            </div> 
                            <div className="grid flex items-center text-sm grid-cols-6 font-medium text-slate-700 border-b border-slate-500 py-3">
                                <h6>Hikam</h6>
                                <h6>089998777898</h6>
                                <h6>1</h6>
                                <h6>10:00</h6>
                                <h6>10:15</h6>
                                <div className='py-1 px-3 w-[120px] rounded-md text-white bg-orange-500 font-medium cursor-pointer'>
                                    Dalam Antrian
                                </div>
                            </div> 
                        </div>
                    </div>
                }

                {isOpen === 2 && 
                    <div className="daftar-antrian w-full bg-white rounded-xl p-5 shadow">
                        <div className="header grid grid-cols-6 font-medium text-slate-700 border-b border-slate-500 pb-6">
                            <h6>Nama</h6>
                            <h6>Telepon</h6>
                            <h6>No. Antri</h6>
                            <h6>Mulai Antri</h6>
                            <h6>Estimasi</h6>
                            <h6>Status</h6>
                        </div>
                        <div>
                            <div className="grid flex items-center text-sm grid-cols-6 font-medium text-slate-700 border-b border-slate-500 py-3">
                                <h6>Hikam</h6>
                                <h6>089998777898</h6>
                                <h6>1</h6>
                                <h6>10:00</h6>
                                <h6>10:15</h6>
                                <div className='py-1 px-3 w-[70px] rounded-md text-white bg-green-600 font-medium cursor-pointer'>
                                    Selesai
                                </div>
                            </div> 
                            <div className="grid flex items-center text-sm grid-cols-6 font-medium text-slate-700 border-b border-slate-500 py-3">
                                <h6>Hikam</h6>
                                <h6>089998777898</h6>
                                <h6>1</h6>
                                <h6>10:00</h6>
                                <h6>10:15</h6>
                                <div className='py-1 px-3 w-[70px] rounded-md text-white bg-green-600 font-medium cursor-pointer'>
                                    Selesai
                                </div>
                            </div> 
                            <div className="grid flex items-center text-sm grid-cols-6 font-medium text-slate-700 border-b border-slate-500 py-3">
                                <h6>Hikam</h6>
                                <h6>089998777898</h6>
                                <h6>1</h6>
                                <h6>10:00</h6>
                                <h6>10:15</h6>
                                <div className='py-1 px-3 w-[70px] rounded-md text-white bg-green-600 font-medium cursor-pointer'>
                                    Selesai
                                </div>
                            </div> 
                            <div className="grid flex items-center text-sm grid-cols-6 font-medium text-slate-700 border-b border-slate-500 py-3">
                                <h6>Hikam</h6>
                                <h6>089998777898</h6>
                                <h6>1</h6>
                                <h6>10:00</h6>
                                <h6>10:15</h6>
                                <div className='py-1 px-3 w-[70px] rounded-md text-white bg-green-600 font-medium cursor-pointer'>
                                    Selesai
                                </div>
                            </div> 
                        </div>
                    </div>
                }

                {isOpen === 3 && 
                    <div className="daftar-antrian w-full bg-white rounded-xl p-5 shadow">
                        <div className="header grid grid-cols-4 font-medium text-slate-700 border-b border-slate-500 pb-6">
                            <h6>Nama</h6>
                            <h6>Email</h6>
                            <h6>Telepon</h6>
                            <h6>Alamat</h6>
                        </div>
                        <div>
                            <div className="grid flex items-center text-sm grid-cols-4 font-medium text-slate-700 border-b border-slate-500 py-3">
                                <h6>Hikam</h6>
                                <h6>hikam@gmail.com</h6>
                                <h6>089998899987</h6>
                                <h6>Watumas</h6>
                            </div> 
                            <div className="grid flex items-center text-sm grid-cols-4 font-medium text-slate-700 border-b border-slate-500 py-3">
                                <h6>Hikam</h6>
                                <h6>hikam@gmail.com</h6>
                                <h6>089998899987</h6>
                                <h6>Watumas</h6>
                            </div> 
                            <div className="grid flex items-center text-sm grid-cols-4 font-medium text-slate-700 border-b border-slate-500 py-3">
                                <h6>Hikam</h6>
                                <h6>hikam@gmail.com</h6>
                                <h6>089998899987</h6>
                                <h6>Watumas</h6>
                            </div> 
                            <div className="grid flex items-center text-sm grid-cols-4 font-medium text-slate-700 border-b border-slate-500 py-3">
                                <h6>Hikam</h6>
                                <h6>hikam@gmail.com</h6>
                                <h6>089998899987</h6>
                                <h6>Watumas</h6>
                            </div> 
                        </div>
                    </div>
                }
            </div>
        </div>
    </>
  )
}

export default Admin