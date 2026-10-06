import React from "react";
import Navbar from "../components/navbar";

const projects = [
  {
    title: "Product Search Dashboard",
    desc: "An app that allows users to search for products and get quick results.",
    link: "https://lanhub-4kzkih5u6-vera-lars-projects.vercel.app",
  },
  {
    title: "Simple Banking App",
    desc: "A banking application where you can create and remove accounts, deposit money, and withdraw money.",
    link: "https://flask-banking-app-fj5s-61y55sgxa-vera-lars-projects.vercel.app",
  },
  {
    title: "Travel Research App",
    desc: "An application that allows users to learn more about countries they want to travel to.",
    link: "https://lanhub-travelapp-97tp0jti8-vera-lars-projects.vercel.app",
  },
];

const ProjectPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
{/* PROJECT SECTION */}
      <section className="px-6 py-20 sm:px-10 lg:px-20">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
            My Work
          </p>

          <h1 className="text-4xl font-bold text-black sm:text-5xl">
            My Projects
          </h1>

          <p className="mt-4 text-gray-600">
            Here are some of the projects I have built while developing my
            skills in web development.
          </p>
        </div>

        {/* PROJECT CARDS*/}
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (
            <div
              key={project.title}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                shadow-lg
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              {/* Project Number */}
              <div className="flex h-14 items-center justify-between bg-black px-5">
                <span className="text-sm font-bold text-white">
                  PROJECT {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-xs text-gray-400">
                  0{index + 1}
                </span>
              </div>

              {/* Project Preview */}
              <div
                className="
                  flex
                  h-48
                  items-center
                  justify-center
                  bg-linear-to-br
                  from-gray-900
                  via-gray-800
                  to-gray-600
                  px-5
                "
              >
                <span className="text-center text-2xl font-bold text-white">
                  {project.title}
                </span>
              </div>

              {/* Project Information */}
              <div className="p-6">

                <h2 className="text-xl font-bold text-black">
                  {project.title}
                </h2>

                <p className="mt-3 min-h-20 text-sm leading-6 text-gray-600">
                  {project.desc}
                </p>

                {/* View Project */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-6
                    flex
                    w-full
                    items-center
                    justify-center
                    rounded-full
                    bg-black
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition
                    duration-300
                    hover:bg-gray-800
                  "
                >
                  View Project →
                </a>

              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
};

export default ProjectPage;