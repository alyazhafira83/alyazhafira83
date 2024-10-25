import React from 'react'
import Navbar from '../components/template/Navbar'
import Hero from '../components/template/Hero'
import ListMenu from '../components/template/ListMenu'

const Home = () => {
  return (
    <div className='bg-slate-50'>
        <div className='max-w-[900px] mx-auto'>
            <Navbar />
            <Hero />
            <ListMenu />
        </div>
    </div>
  )
}

export default Home