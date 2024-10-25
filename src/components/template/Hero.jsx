import React from 'react'
import banner from '../../assets/images/baner.png'

const Hero = () => {
  return (
    <div>
        <div className='w-full rounded-lg h-[300px] rounded-xl overflow-hidden mb-5 mt-5'>
            <img src={banner} className='w-full h-full object-cover' />
        </div>

        <div className='grid grid-cols-2 gap-x-5'>
            <div className='w-full h-[150px] rounded-xl bg-blue-400 flex items-center gap-x-5 p-5'>
                {/* <img src="" className='w-[50px]' /> */}
                <div className='w-[120px] h-[120px] bg-blue-700 rounded-md'></div>
                <div>
                    <h3 className='font-medium'>Selamat Datang</h3>
                    <h5 className='font-medium text-2xl'>User Gacoan</h5>
                </div>
            </div>
            <div className='w-full h-[150px] rounded-xl bg-blue-400 flex items-center gap-x-5 p-5'>
                <div>
                    <h5 className='font-medium'>Jam Operasional Antrian</h5>
                    <p>Setip hari <span className='font-medium'>09:00 - 23:00</span></p>
                </div>
                <div>
                    <h5 className='font-medium'>Jam Operasional Outlet</h5>
                    <p>Setip hari <span className='font-medium'>24 jam</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero