import { GrContact } from "react-icons/gr";
import { VscMenu } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
export const NavBar = ({ userName, navModal, setNavModal }) => {
  return (
    <nav className=" p-5 flex justify-between items-center gap-2 font-sora ">
      <h1 className="font-bold text-2xl hover:text-[#6320EE] transition-colors duration-300">
        {userName}
      </h1>
      <ul className="hidden md:flex gap-4">
        <a href="#hero">
          <li>Home</li>
        </a>
        <a href="#projects">
          <li>Projects</li>
        </a>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
      <a href="#contact">
        <GrContact className="hidden md:flex" />
      </a>
      <button onClick={() => setNavModal(!navModal)} className="md:hidden">
        <VscMenu />
      </button>
    </nav>
  );
};

export const NavModal = ({ navModal, setNavModal }) => {
  return (
    <div className="md:hidden fixed inset-0 bg-black/50 opacity-sm flex justify-center items-center">
      <div className="border-2 border-white  max-[450px]:fixed max-[450px]:inset-0 absolute right-0 top-0 bottom-0  min-[451px]:w-[35%] backdrop-blur-2xl flex flex-col items-center gap-5">
        <button
          onClick={() => setNavModal(!navModal)}
          className="absolute top-0 right-0 m-4 hover:cursor-pointer"
        >
          <AiOutlineClose />
        </button>
        <ul className=" w-full pt-2 text-center mt-12">
          <a href="#hero">
            <li className="mb-4 pb-2  hover:cursor-pointer hover:text-[#6320EE]  transition-colors duration-300 ">
              Home
            </li>
          </a>
          <a href="#projects">
            <li className="mb-4 pb-2 transition-colors hover:text-[#6320EE] hover:cursor-pointer duration-300">
              Projects
            </li>
          </a>
          <a href="#about">
            <li className="mb-4 pb-2 transition-colors hover:text-[#6320EE]  hover:cursor-pointer duration-300">
              About
            </li>
          </a>
          <a href="#contact">
            <li className="mb-4 pb-2 transition-colors hover:text-[#6320EE]  hover:cursor-pointer duration-300">
              Contact
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};
