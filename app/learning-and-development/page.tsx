'use client';
import { useRouter } from 'next/navigation';
import React from 'react'   
import Navbar from '../components/navbar';
{/* LEARNING & DEVELOPMENT */}


const PracticePage: React.FC = () => {
    return (
        <>
           <section
  id="learning"
  className="w-full bg-gray-950 px-4 py-16 sm:px-6 lg:px-10"
>
    <Navbar/>
  <div className="mx-auto max-w-6xl">

    {/* SECTION HEADING */}
    <div className="mb-12 text-center">

      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">
        My Journey
      </p>

      <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
        Learning & Development
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
        I am continuously developing my skills by learning new technologies,
        building projects, solving problems, and exploring different areas
        of software development and data analysis.
      </p>

    </div>

    {/* LEARNING CARDS */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {/* CARD 01 */}
      <div
        className="
          group
          rounded-2xl
          border
          border-gray-800
          bg-gray-900
          p-6
          shadow-xl
          transition
          duration-300
          hover:-translate-y-2
          hover:border-cyan-300
        "
      >
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300 text-lg font-bold text-black">
          01
        </div>

        <h3 className="text-xl font-bold text-white">
          Frontend Development
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          Developing responsive and interactive user interfaces while
          improving my understanding of modern frontend technologies.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-lg border border-gray-700 px-3 py-1 text-xs text-cyan-300">
            React
          </span>

          <span className="rounded-lg border border-gray-700 px-3 py-1 text-xs text-cyan-300">
            Next.js
          </span>

          <span className="rounded-lg border border-gray-700 px-3 py-1 text-xs text-cyan-300">
            TypeScript
          </span>

          <span className="rounded-lg border border-gray-700 px-3 py-1 text-xs text-cyan-300">
            Tailwind CSS
          </span>
        </div>
      </div>

      {/* CARD 02 */}
      <div
        className="
          group
          rounded-2xl
          border
          border-gray-800
          bg-gray-900
          p-6
          shadow-xl
          transition
          duration-300
          hover:-translate-y-2
          hover:border-cyan-300
        "
      >
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300 text-lg font-bold text-black">
          02
        </div>

        <h3 className="text-xl font-bold text-white">
          Backend Development
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          Learning how applications communicate with servers, APIs and
          databases while building backend projects.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-lg border border-gray-700 px-3 py-1 text-xs text-cyan-300">
            Python
          </span>

          <span className="rounded-lg border border-gray-700 px-3 py-1 text-xs text-cyan-300">
            Django
          </span>

          <span className="rounded-lg border border-gray-700 px-3 py-1 text-xs text-cyan-300">
            Flask
          </span>

          <span className="rounded-lg border border-gray-700 px-3 py-1 text-xs text-cyan-300">
            REST API
          </span>
        </div>
      </div>

      {/* CARD 03 */}
      <div
        className="
          group
          rounded-2xl
          border
          border-gray-800
          bg-gray-900
          p-6
          shadow-xl
          transition
          duration-300
          hover:-translate-y-2
          hover:border-cyan-300
        "
      >
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300 text-lg font-bold text-black">
          03
        </div>

        <h3 className="text-xl font-bold text-white">
          Data Analysis
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          Learning how to organize, analyze and visualize data to discover
          useful information and support better decisions.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-lg border border-gray-700 px-3 py-1 text-xs text-cyan-300">
            Excel
          </span>

          <span className="rounded-lg border border-gray-700 px-3 py-1 text-xs text-cyan-300">
            Data Analysis
          </span>

          <span className="rounded-lg border border-gray-700 px-3 py-1 text-xs text-cyan-300">
            Charts
          </span>

          <span className="rounded-lg border border-gray-700 px-3 py-1 text-xs text-cyan-300">
            Visualization
          </span>
        </div>
      </div>

      {/* CARD 04 */}
      <div
        className="
          group
          rounded-2xl
          border
          border-gray-800
          bg-gray-900
          p-6
          shadow-xl
          transition
          duration-300
          hover:-translate-y-2
          hover:border-cyan-300
        "
      >
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300 text-lg font-bold text-black">
          04
        </div>

        <h3 className="text-xl font-bold text-white">
          Problem Solving
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          Improving my ability to break problems into smaller parts,
          understand requirements, and build practical solutions.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-lg border border-gray-700 px-3 py-1 text-xs text-cyan-300">
            Algorithms
          </span>

          <span className="rounded-lg border border-gray-700 px-3 py-1 text-xs text-cyan-300">
            Debugging
          </span>

          <span className="rounded-lg border border-gray-700 px-3 py-1 text-xs text-cyan-300">
            Problem Solving
          </span>
        </div>
      </div>

    </div>

    {/* JOURNEY MESSAGE */}
    <div className="mt-12 rounded-2xl border border-gray-800 bg-gray-900/70 p-6 text-center sm:p-8">

      <p className="text-sm leading-7 text-gray-400 sm:text-base">
        I may be at the beginning of my professional journey, but every
        project I build gives me an opportunity to learn, experiment and
        become a better developer.
      </p>

      <p className="mt-4 font-semibold text-cyan-300">
        Learning. Building. Improving.
      </p>

    </div>

  </div>
</section> 
        </>
    )
}

export default PracticePage

