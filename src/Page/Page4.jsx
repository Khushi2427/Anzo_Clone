import React from 'react'

const Page4 = () => {
  return (
    <div className='h-screen w-full p-5  bg-white'>
      <div className='h-full w-full rounded-3xl  bg-black relative p-12 leading-[20vh]'>
        <div>
            <h1 className='font-[shi] text-[25vh] text-gray-400'>WHAT</h1>
        </div>
        <div>
            <h1 className='font-[shi] text-[25vh] text-white'>I Do</h1>
        </div>
        <div id='harry' className='bottom-7 absolute leading-[3vh]'>
            <div className='text-white'><h3>I DESIGN AND DEVELOP</h3></div>
            <div className='text-gray-400'><h3>MODERN, IMPACTFUL AND LUXURIOUS</h3></div>
            <div className='text-white'><h3>websites that seamlessly bridge your goals with needs of your clients.</h3></div>
        </div>
      </div>
    </div>
  )
}

export default Page4
