 'use client';
 import { useRouter } from 'next/navigation';
 import Contacts from '../contacts/page';
 import AboutPage from '../about/page';
 import projects from '../projects/page';
 import PracticePage from '../learning-and-development/page';

 
 import React from 'react'
 
 const Navbar:React.FC = () => {
    const router = useRouter();
    return (
        <>
           
 <nav className="w-full bg-gray-900 px-4 py-4 sm:px-6 lg:px-10">

        <div className="mx-auto flex max-w-7xl items-center justify-between">

          {/* LOGO */}
          <div
            className="
              flex
              h-12
              w-14
              shrink-0
              items-center
              justify-center
              rounded-bl-2xl
              rounded-se-2xl
              border
              border-cyan-300
              bg-black
              font-bold
              text-white
            "
          >
          <button onClick={() => router.push("/")} className="font-bold">    VL </button>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-8 md:flex ml-auto">

           

           
          </div>

          {/* HIDE ME BUTTON */}
          <button
              onClick={() => router.push("/contacts")}
            
  className="
    flex
    items-center
    justify-center
    rounded-2xl
    bg-cyan-300
    px-6
    py-3
    font-bold
    text-black
    transition
    duration-300
    hover:bg-cyan-200
    hover:scale-105
  ">

  Hire Me

 </button>
        
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          className="
            mx-auto
            mt-4
            flex
            max-w-7xl
            items-center
            justify-between
            gap-2
            overflow-x-auto
            border-t
            border-gray-800
            pt-4
            md:hidden
          "
        >

           <button
              onClick={() => router.push("/about")}
              className="font-bold text-white transition hover:underline"
            >
              About
            </button>
             <button
              onClick={() => router.push("/projects")}
              className="font-bold text-white transition hover:underline">
              Projects
            </button>

        
             <button
              onClick={() => router.push("/contacts")}
              className="font-bold text-white transition hover:underline" >
              contacts
            </button>

          <button  onClick={() => router.push("/learning-and-development")}
              className="font-bold text-white transition hover:underline" >
              learning & development
            </button>


        </div>

      </nav> 
        </>
    )
 }
 
 export default Navbar;
 
    