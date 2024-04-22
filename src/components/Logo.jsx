import React from 'react'


function Logo({width = '100px'}) {
  return (
    <img  className=' rounded-3xl h-[70px] w-[70px]   border-black' 
    src="/Logo1.png" 
    alt="Logo" 
    width={width} />
  )
}

export default Logo