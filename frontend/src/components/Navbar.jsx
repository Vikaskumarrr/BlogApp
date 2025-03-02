import { EqualNot, Menu, X } from 'lucide-react';
import { useState } from 'react'
import { IKImage } from 'imagekitio-react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='w-full h-16 md:20 flex items-center justify-between'>
      {/* LOGO */}
      <div className='flex  items-center font-bold text-2xl'>
        <IKImage urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT} 
        // path='/logo.png'
        src={'https://ik.imagekit.io/ddookruw0/logo.png'}
         className='w-18 h-18 mix-blend-multiply ' alt='logo' />
        <span className=''>.blog</span>
      </div>
      {/* Mobile menu  */}
      <div className='md:hidden'>
        <div className='cursor-pointer text-2xl' onClick={() => setOpen((prev) => !prev)}>
          {open ? <EqualNot /> : <Menu />}
        </div>
        {/* MODILE VIEW LISTS  */}
        <div className={`w-full h-screen flex flex-col items-center justify-center gap-12 font-medium text-lg absolute top-16 bg-[#e6e6ff] transition-all ease-in-out ${open ? "-right-0" : "-right-{100%"} `}>
          <a href='/'>Home</a>
          <a href='/'>Trending</a>
          <a href='/'>Most Popular</a>
          <a href='/'>About</a>
          <a href=''>
            <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>Login 👋</button>
          </a>
        </div>

      </div>
      {/* Destop menu */}
      <div className='hidden md:flex items-center justify-center gap-8 xl:gap-12 font-medium'>
        <a href='/'>Home</a>
        <a href='/'>Trending</a>
        <a href='/'>Most Popular</a>
        <a href='/'>About</a>
        <a href=''>
          <Link to='login'><button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>Login 👋</button>
          </Link>
        </a>

      </div>
    </div>
  )
}

export default Navbar