import{useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
const Page2 = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(function(){
      gsap.from(".section3",{
        transform:'rotateX(-80deg)',
        opacity:0,
        duration:2,
        stagger:1,
        scrollTrigger:{
            trigger:'.section3',
            // markers:true,
            start:'top 70%',
            end:'top -80%',
            scrub:2
        }

      })
    })
  return (
    <div id='section4' className="bg-white text-black">
      <h6 className="text-gray-500 text-center p-5">©  anzo.studio 2024 | designed and developed</h6>
    
    {/* <div id="section3"
    className="text-[30vw] text-center font-[shi] leading-[0.8] m-3">
        <h1>IMAPACTFUL <br />DESIGN<br/>IS THE<br/>DESIGN <br />THAT <br />WORKS!</h1>
        </div> */}
        <div id='' className='text-[30vw] text-center font-[shi] leading-[25vw]'>
            <div className='section3'><h1>HELPING </h1></div>
            <div className='section3'><h1>MY</h1></div>
            <div className='section3'><h1>CLIENTS</h1></div>
            <div className='section3'><h1>TO ACHIEVE </h1></div>
            <div className='section3'><h1>THEIR</h1></div>
            <div className='section3'><h1>DREAMS!</h1></div>



        </div>
        

    </div>
  )
}

export default Page2
