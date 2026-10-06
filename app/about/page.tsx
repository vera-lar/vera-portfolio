import Navbar
from "../components/navbar";

import React from 'react'

const AboutPage:React.FC = () => {
    return (
        <main>
            <Navbar/>
            <div className="max-w-3xl mx-auto py-16 px-6">
                <h1 className="text-4xl font-bold">About Me</h1>
                <p className="mt-6 text-gray-600 leading-relaxed "> Hi , I'm Vera, Lar Telya Vongkur! a frondend developer based in Jos, Nigeria. I build clean, responsive websites with Next.js , React and Tailwind CSS. I'm currently seeking a frondend internship where I can learn contribute.</p>
                <h2 className="mt-8 text-xl font-semibold">Skills</h2>
                <div className="flex flex-wrap gap-2 mt-3">{["Next.js","React","Tailwind", "Javascript","Git"].map(skill =>(
                    <span key={skill} className="px-3 py-1 bg-black text-white rounded-full text-sm">{skill}</span>
                ))}</div>
            </div>
        </main>
    )
}

export default AboutPage;
