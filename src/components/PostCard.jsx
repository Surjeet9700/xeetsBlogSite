import React from 'react'
import authservice from '../appwrite/conf'
import { Link } from 'react-router-dom'

// function PostCard({
//    $id,
//     title,
//     featuredImage,
//     content 
// }) {
//   return (
//     <Link to={`/post/${$id}`}>
//         <div className='flex flex-col justify-evenly items-start'>
//             <div className='w-full justify-center mb-4'>
//                 <img src={authservice.getFilePreview(featuredImage)} width={100} alt={title}
//                 className='rounded-xl' />
//             </div>
//         </div>
//         <h2 className='text-xl text-white/80 font-bold'>{title}</h2>
//     </Link>
    
//   )
// }






export default function Postcard({
    $id,
    title,
    featuredImage,
    content
}) {
  
  return (
    <Link to={`/post/${$id}`}>
    <div className="relative h-[400px] w-[300px] sm:h-[300px] md:h-[350px] lg:h-[400px] sm:w-[250px] md:w-[275px] lg:w-[300px] rounded-md grid 
    sm:grid-rows-3 duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <img
        src={authservice.getFilePreview(featuredImage)}
        alt="Post img"
        className="z-0 absolute inset-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg sm:text-base md:text-lg lg:text-lg font-semibold text-white">{title}</h1>
        <p className="mt-2 text-sm sm:text-xs md:text-sm lg:text-sm text-gray-300">
          {/* {content} */}
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm sm:text-xs md:text-sm lg:text-sm font-semibold text-white">
          View Post &rarr;
        </button>
      </div>
    </div>
  </Link>
  
  )
}
