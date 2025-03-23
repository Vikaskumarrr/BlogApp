// import { Image } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
        {/*First Post  */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 ">
        {/* Image */}
        <img src="images.jpeg" className="rounded-3xl object-cover" />
        {/* Details */}
        <div className="flex itmes-center gap-4">
            <h1 className="font-semibold lg:text-lg">01.</h1>
            <Link to={"/test"} className="text-blue-800 lg:text-lg">Web Design</Link>
            <span className="text-gray-500">2 days ago</span>
        </div>
        {/* Title */}
        <Link
        to="/test"
        className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
        </div>
        {/* Other posts */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div className="lg:h-1/3 flex justify-between gap-4">
            {/* <Image /> */}
            <img  src="images.jpeg" className='rounded-2xl w-1/3 object-cover h-25'/>
            {/* Details of images  */}
            <div className="w-2/3">
               <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                <h1 className="font-semibold">02.</h1>
                <Link to="/test" className="text-blue-800">Web Design</Link>
                <span className="text-gray-500 text-sm"> 2 days ago</span>
                </div> 
                <Link to="/test" className=" text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Lorem ipsum dolor sit amet.</Link>
            </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4">
            {/* <Image /> */}
            <img  src="images.jpeg" className='rounded-2xl w-1/3 object-cover h-25'/>
            {/* Details of images  */}
            <div className="w-2/3">
               <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                <h1 className="font-semibold">02.</h1>
                <Link to="/test" className="text-blue-800">Web Design</Link>
                <span className="text-gray-500 text-sm"> 2 days ago</span>
                </div> 
                <Link to="/test" className=" text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Lorem ipsum dolor sit amet.</Link>
            </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4">
            {/* <Image /> */}
            <img  src="images.jpeg" className='rounded-2xl w-1/3 object-cover h-25'/>
            {/* Details of images  */}
            <div className="w-2/3">
               <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                <h1 className="font-semibold">02.</h1>
                <Link to="/test" className="text-blue-800">Web Design</Link>
                <span className="text-gray-500 text-sm"> 2 days ago</span>
                </div> 
                <Link to="/test" className=" text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Lorem ipsum dolor sit amet.</Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FeaturedPosts ;