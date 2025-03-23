import React from 'react'
import { Link } from 'react-router-dom'

const PostLists = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 ">
      {/* Images */}
    <div className="md:hidden xl:block ">
        <img src="images.jpeg"  className="rounded-2xl object-cover" />
    </div>
    {/* Detials */}
    <div className="flex flex-col gap-4 xl:w-2/3">
      <Link to="/test" className="text-4xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cupiditate est dicta alias repellendus hic.</Link>
      <div className="flex items-center text-sm mt-4 text-gray-600 gap-2">
          <span>Written by</span>
          <Link to="/test" className='text-blue-800'>Jone doh</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span className='text-sm'>2 Days ago</span>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam temporibus dolor eum doloribus necessitatibus dolorum?</p>
      <Link to="/test" className='underline text-blue-800 text-sm mt-4' >Read more</Link>
    </div>
    </div>
  )
}

export default PostLists