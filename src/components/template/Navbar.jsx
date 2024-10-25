import React from 'react'
import Button from '../atoms/Button'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='max-w-[900px] mx-auto'>
            <div className='flex items-center justify-between py-4'>
                <h3>GACOAN</h3>
                <nav className='flex items-center gap-x-5'>
                    <Link to="/">Beranda</Link>
                    <a href="">Daftar Menu</a>
                    <Link to="/antri">Antrian</Link>
                </nav>
                <div>
                    <Button text={"Login"}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar