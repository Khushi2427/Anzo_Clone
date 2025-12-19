import React from 'react'

const TiltText = (props) => {
  return (
    <div id='tiltdiv'ref={props.abc} className='absolute top-1/3 left-10 text-white font-bold text-6xl ml-3 leading-[7vh]'>
      <h1 className='font-[khu]'>
      I AM <span className='text-black'>DARK MODE™</span></h1>
      <h1 className='font-[khu]'>DESIGNER</h1>
      <h1 className='font-[khu]'>TO HIRE</h1>
    </div>
  )
}

export default TiltText
