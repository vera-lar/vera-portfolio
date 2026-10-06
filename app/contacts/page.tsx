'use client';
import { useRouter } from 'next/navigation';

import React from 'react'

const Contacts:React.FC = () => {
    const router = useRouter();
    return (
        <>
        <section id='contact' className=' py-20 px-6 bg-gray-50/40'>
            <div className="max-w-4xl mx-auto">
                <h1 className='text-cyan-300/40 mt-10 font-extrabold text-2xl ml-4'> Let's Work Together. </h1>
                <p className="text-gray-300/40 mt-2"> I'm currently looking for a frondend internship. Let's connect!</p>
                
                <div className='grig md: grid-cols-2 gap-10 '>
                {/* left contact info*/}
                <div className="  space-y-4"> </div>
                <p className="text-sm text-gray-500">Email</p>
                <a href='mailto:larvera6@gmail.com' className='font-medium hover:underline'>larvera6@gmail.com</a>
                 {/*  */}
                    <div >
                        <p className="text-sm text-gray-500">Github</p>
                         <a href='https://github.com/vera-lar' target='_black'  className='font-medium hover:underline'>github.com/vera-lar</a>

                    </div>
                    <div >
                        <p className="text-sm text-gray-500">Linkedin</p>
                         <a href='https://linkedin.com/in/vera-lar' target='_black'  className='font-medium hover:underline'>linkedin.com/in/vera-lar</a>

                    </div>
                    <div >
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="text-medium">Jos, Nigeria(open for remote)</p>

                    </div>
           
{/* right  */}
     <form action="https://formspree.io/f/xaygqgwl" className="space-y-4 bg-white p-6 rounded-2xl shadow-sm" method='POST'>
        
        <input name="name"
           required
           placeholder='Your name'
           className='w-full border text-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black' 
            />
        
        <input name="email"
           type='email'
           required
           placeholder='Your email'
           className='w-full border text-black  rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black' 
            />
        
        <textarea name="message"
           required
           rows={4}
           placeholder='Hi Vera, we have an internship...'
           className='w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 text-black focus:ring-black' 
            />
               <button  type='submit'
                  className='w-full bg-black font-medium text-white border rounded-lg py-3 hover:bg-gray-800'>Send Message</button>
                  <p className="text-xs text-gray-400 text-center">Form powered by formspree - free, no backend needed</p>
                 
     </form>
         </div>
        </div>
        </section>
        </>
    )
}

export default Contacts;
