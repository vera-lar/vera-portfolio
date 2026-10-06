
'use client';
import Navbar from "../components/navbar";
import Contacts from "../contacts/page";


const PortfolioPage:React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-950">

      {/* ================= NAVBAR ================= */}
       <Navbar/>


      {/*  MAIN / HERO  */}
      <main
        id="about"
        className="
          w-full
          bg-gray-950
          px-4
          py-10
          sm:px-6
          sm:py-14
          lg:px-10
          lg:py-20
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-6xl
            flex-col
            items-center
            gap-10
            lg:flex-row
            lg:items-center
            lg:gap-16
          "
        >

          {/* ================= LEFT SIDE ================= */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-4
              lg:w-1/2
            "
          >

            {/* INTRODUCTION */}
            <h1
              className="
                text-3xl
                font-extrabold
                leading-tight
                text-white
                sm:text-4xl
                md:text-5xl
              "
            >
              Hi, I'm Vera, Lar Telya Vongkur!
            </h1>

            <h2
              className="
                text-lg
                font-medium
                text-cyan-300
                sm:text-xl
                md:text-2xl
              "
            >
              Software Developer & Data Analyst
            </h2>

            <p
              className="
                max-w-2xl
                text-sm
                font-extralight
                leading-7
                text-gray-300
                sm:text-base
              "
            >
              I am a passionate software developer and data analyst with
              experience in creating innovative solutions and deriving
              insights from complex datasets.
            </p>


            {/* ================= BUTTONS ================= */}
            <div
              className="
                flex
                w-full
                flex-col
                gap-3
                pt-4
                sm:flex-row
              "
            >

              <button
                type="button"
                className="
                  flex
                  h-14
                  w-full
                  items-center
                  justify-center
                  rounded-2xl
                  bg-cyan-300
                  px-6
                  font-bold
                  text-black
                  transition
                  hover:bg-cyan-200
                  sm:w-auto
                "
              >
                View Projects
              </button>

              <button
                type="button"
                className="
                  flex
                  h-14
                  w-full
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-cyan-300
                  px-6
                  font-bold
                  text-white
                  transition
                  hover:bg-cyan-300
                  hover:text-black
                  sm:w-auto
                "
              >
                Download CV
              </button>

            </div>


            {/* ================= SKILLS ================= */}
            <div
              className="
                mt-4
                flex
                w-full
                flex-wrap
                gap-2
                rounded-2xl
                p-2
              "
            >

              <span
                className="
                  rounded
                  border
                  border-cyan-300
                  px-3
                  py-2
                  text-sm
                  text-white
                  shadow
                "
              >
                TypeScript
              </span>

              <span
                className="
                  rounded
                  border
                  border-cyan-300
                  px-3
                  py-2
                  text-sm
                  text-white
                  shadow
                "
              >
                Python
              </span>

              <span
                className="
                  rounded
                  border
                  border-cyan-300
                  px-3
                  py-2
                  text-sm
                  text-white
                  shadow
                "
              >
                React
              </span>

              <span
                className="
                  rounded
                  border
                  border-cyan-300
                  px-3
                  py-2
                  text-sm
                  text-white
                  shadow
                "
              >
                Tailwind
              </span>

              <span
                className="
                  rounded
                  border
                  border-cyan-300
                  px-3
                  py-2
                  text-sm
                  text-white
                  shadow
                "
              >
                Next.js
              </span>

              <span
                className="
                  rounded
                  border
                  border-cyan-300
                  px-3
                  py-2
                  text-sm
                  text-white
                  shadow
                "
              >
                Django
              </span>

              <span
                className="
                  rounded
                  border
                  border-cyan-300
                  px-3
                  py-2
                  text-sm
                  text-white
                  shadow
                "
              >
                JavaScript
              </span>

            </div>

          </div>


          {/* RIGHT SIDE  and LEFT SIDE  */}
        
<div
  id="projects"
  className="
    flex
    min-h-65.5
    w-full
    items-center
    justify-center
    rounded-2xl
    border
    border-black
   
    shadow-xl
    sm:min-h-100
    lg:min-h-125
    lg:w-1/2
    bg-center
  "
>
  {/* TWO-SIDE HOLDER */}
  <div
    className="
      flex
      h-full
      w-full
      flex-col
      overflow-hidden
      rounded-2xl
      sm:flex-row
    "
  >

    {/*  CODE SIDE */}
    <div
      className="
        flex
        min-h-75
        w-full
        flex-col
        justify-center
        overflow-hidden
        bg-[#111111]
        p-5
        text-left
        shadow-2xl
        sm:min-h-full
        sm:w-1/2
      "
    >
      <p className="mb-3 text-sm text-gray-400">
         about-me.ts
      </p>

      <pre className="overflow-x-auto text-xs leading-6 sm:text-sm">
        <code>
          <span className="text-cyan-300">const</span>{" "}
          <span className="text-cyan-300">developer</span> = {"{"}
          {"\n"}
          {"  "}
          <span className="text-yellow-200">name</span>:{" "}
          <span className="text-yellow-200">"Vera Lar"</span>,
          {"\n"}
          {"  "}
          <span className="text-yellow-200">role</span>:{" "}
          <span className="text-yellow-200">
            "Frontend Developer"
          </span>,
          {"\n"}
          {"  "}
          <span className="text-yellow-200">skills</span>: [
          {"\n"}
          {"    "}
          <span className="text-yellow-200">"React"</span>,
          {"\n"}
          {"    "}
          <span className="text-yellow-200">"TypeScript"</span>,
          {"\n"}
          {"    "}
          <span className="text-yellow-200">"Next.js"</span>,
          {"\n"}
          {"    "}
          <span className="text-yellow-200">"Tailwind CSS"</span>
          {"\n"}
          {"  "}],
          {"\n"}
          {"  "}
          <span className="text-yellow-200">Currently</span>:{" "}
          <span className="text-yellow-200">
            "Building scalables microservices & tools"
          </span>
          {"\n"}
          {"}"};
        </code>
      </pre>

      <p className="mt-4 text-xs text-cyan-500">
       Turning ideas into functional interfaces.
      </p>
    </div>

    {/* PICTURE SIDE */}
    <div
      className="
        relative
        min-h-75
        w-full
        overflow-hidden
        bg-black
        bg-cover
        bg-center
        bg-no-repeat
        shadow-2xl
        sm:min-h-full
        sm:w-1/2
      "
      style={{
        backgroundImage: "url('/images/vera1.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

     
    </div>

  </div>
</div>



        </div>

      </main>


      {/*  projects */}
      <section
        id="projects"
        className="w-full bg-gray-900 px-4 py-16 sm:px-6 lg:px-10"
      >

        <div className=" flex justify-center gap-5 mx-auto max-w-7xl">
          {/* card 01 */}

<div
  className="
    relative
    flex
    h-full
    min-h-62.5
    w-1/3
    items-center
    justify-center
    rounded-xl
    bg-cover
    bg-center
    bg-no-repeat
    overflow-hidden
  "
  style={{
    backgroundImage: "url('./images/project01.png')",
  }}
>
  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/30" />

  {/* PROJECT HEADER */}
  <div className="absolute top-0 left-0 z-10 flex h-10 w-full items-center justify-center gap-2 bg-gray-300/60">

    <h1 className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white font-bold">
      01
    </h1>

    <p className="text-white font-medium">
      Project 01
    </p>

  </div>

  {/* VIEW PROJECT LINK */}
  <a
    href="https://lanhub-4kzkih5u6-vera-lars-projects.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="
      relative
      z-10
      mt-36
      rounded-lg
      bg-black
      px-3
      py-2
      text-white
      font-medium
      transition
      hover:bg-blue-900
      hover:scale-105
    "
  >
    View Project 01
  </a>
</div>

{/* PROJECT PREVIEW */}
<div
  className="
    relative
    flex
    h-full
    min-h-62.5
    w-1/3
    items-center
    justify-center
    rounded-xl
    bg-cover
    bg-center
    bg-no-repeat
    overflow-hidden
  "
  style={{
    backgroundImage: "url('./images/project02.png')",
  }}
>
  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/30" />

  {/* PROJECT HEADER */}
  <div className="absolute top-0 left-0 z-10 flex h-10 w-full items-center justify-center gap-2 bg-gray-300/60">

    <h1 className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white font-bold">
      02
    </h1>

    <p className="text-white font-medium">
      Project 02
    </p>

  </div>

  {/* VIEW PROJECT LINK */}
  <a
    href="https://lanhub-travelapp-97tp0jti8-vera-lars-projects.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="
      relative
      z-10
      mt-36
      rounded-lg
      bg-black
      px-3
      py-2
      text-white
      font-medium
      transition
      hover:bg-blue-900
      hover:scale-105
    "
  >
    View Project 02
  </a>
</div>


<div
  className="
    relative
    flex
    h-full
    min-h-62.5
    w-1/3
    items-center
    justify-center
    rounded-xl
    bg-cover
    bg-center
    bg-no-repeat
    overflow-hidden
  "
  style={{
    backgroundImage: "url('./images/project03.png')",
  }}
>
  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/30" />

  {/* PROJECT HEADER */}
  <div className="absolute top-0 left-0 z-10 flex h-10 w-full items-center justify-center gap-2 bg-gray-300/60">

    <h1 className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white font-bold">
      03
    </h1>

    <p className="text-white font-medium">
      Project 03
    </p>

  </div>

  {/* VIEW PROJECT LINK */}
  <a
    href="https://flask-banking-app1.onrender.com"
    target="_blank"
    rel="noopener noreferrer"
    className="
      relative
      z-10
      mt-36
      rounded-lg
      bg-black
      px-3
      py-2
      text-white
      font-medium
      transition
      hover:bg-blue-900
      hover:scale-105
    "
  >
    View Project 03
  </a>
</div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="w-full bg-gray-950 px-4 py-16 sm:px-6 lg:px-10"
      >

       <Contacts/>

      </section>

    </div>
  );
};

export default PortfolioPage;
