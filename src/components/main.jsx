export const Hero = ({ userName }) => {
  return (
    // use flex-1 so that this div take the remaining space after nav as min-h-screen added a scroll bar
    <div
      className=" flex flex-col   md:flex-row md:items-center   text-[#6b6b68] p-8 overflow-y-auto"
      id="hero"
    >
      <div className="space-y-3  p-4">
        <h2>Hey,I'm {userName}</h2>
        <h1 className="text-[#d85a30] text-3xl">
          <span className="text-3xl text-[#185fa5]">Backend </span>Developer
        </h1>
        <p>
          I build reliable APIs and backend systems — from auth flows to rate
          limiting — for products people actually use.
        </p>
        {/* <button className="rounded border px-3 py-2 mr-1  text-black hover:bg-black hover:text-white transition-colors duration-300">
          Get in Touch
        </button> */}
        {/* button  swallows a tags click so had to remove buttons*/}
        {/* <a href="#projects">
          <button className="rounded border px-3 py-2 text-white bg-black hover:bg-white hover:text-black transition-colors duration-300">
            View Projects
          </button>
        </a> */}
        <a
          href="#"
          className=" mr-1.5 inline-block rounded border px-3 py-2 text-white bg-black hover:bg-white hover:text-black transition-colors duration-300"
        >
          Get in Touch
        </a>
        <a
          href="#projects"
          className="inline-block rounded border px-3 py-2 text-white bg-black hover:bg-white hover:text-black transition-colors duration-300"
        >
          View Projects
        </a>
      </div>
      <CodeCard />
    </div>
  );
};

const CodeCard = () => {
  return (
    <div className="border border-slate-200 bg-black rounded-2xl flex-1 text-gray-50">
      <div className="flex gap-2 p-4 ">
        <span className="rounded-[50%] bg-red-300 inline-block w-2 h-2 "></span>
        <span className="rounded-[50%] bg-yellow-300 inline-block w-2 h-2"></span>
        <span className="rounded-[50%] bg-green-300 inline-block w-2 h-2"></span>
      </div>
      <div>
        <pre className="font-mono px-3">
          {`POST /api/auth/login
  {   
    "email": "user@social.com",
    "password": "••••••••"
  }\n`}
          <span className="text-green-400"> 200 OK</span>
          {`
  {
    "token": "eyJhbGciOi...",
    "expiresIn": 3600
  }
  `}
        </pre>
      </div>
    </div>
  );
};
