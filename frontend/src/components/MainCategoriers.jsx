import React from 'react'
import { Link, Links } from 'react-router-dom'

const MainCategoriers = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">

        {/* Links  */}
        <div className='flex-1 flex items-center justify-between flex-wrap'>
            <Link to='/posts' className="bg-blue-800 text-white rounded-3xl py-2 px-4 ">All Posts</Link>
            <Link to='/posts?cat=web-design' className="hover:bg-blue-100 text rounded-3xl py-2 px-4 ">Web Design</Link>
            <Link to='/posts?cat=web-design' className="hover:bg-blue-100 text rounded-3xl py-2 px-4 ">Development</Link>
            <Link to='/posts?cat=web-design' className="hover:bg-blue-100 text rounded-3xl py-2 px-4 ">Data Base</Link>
            <Link to='/posts?cat=web-design' className="hover:bg-blue-100 text rounded-3xl py-2 px-4 ">Marketing</Link>
            <Link to='/posts?cat=web-design' className="hover:bg-blue-100 text rounded-3xl py-2 px-4 ">React </Link>
        </div>
        <span className='text-xl font-medium'>|</span>
        {/* Serach bar */}
        <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
            <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill='none'
            stroke='gray'
            >
                <circle  cx="10.5" cy={"10.5"} r="7.5"/>
                <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
            <input type='text' placeholder='serach a post...' className="bg-transparent border-none "/>
        </div>
    </div>
  )
}

export default MainCategoriers