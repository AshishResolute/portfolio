import { HiOutlineMail } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { contactDetails } from "../data/projects.data.js";

export const Contact = () => {
  return (
    <div className=" text-[#6b6b68]  p-8 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 " id="contact">
      <ContactDivBtns />
      <ContactForm />
    </div>
  );
};

const ContactDivBtns = () => {
  return (
    <div className="space-y-4 flex flex-col max-[750px]:items-center ">
      <ContactSrcDivHeader />
      <ContactInlineLinks />
    </div>
  );
};

const ContactSrcDivHeader = () => {
  return (
    <div className="space-y-1 ">
      <h2 className="text-[#185fa5] text-2xl ">Contact</h2>
      <p className="text-md">
        <span>Open for Backend and Full-stack roles.</span>
      </p>
      <p className="text-md">
        <span>Fastest way to reach me is email.</span>
      </p>
    </div>
  );
};

const ContactInlineLinks = () => {
  return (
    <div className=" space-y-3  border-red-300 p-8 pt-0">
      <a
        href={`mailto:${contactDetails.email}`}
        className="flex items-center gap-4 p-2 w-64 max-[350px]:w-44 max-[350px]:justify-center  border border-slate-500hover:border-slate-300 hover:bg-slate-800/50 transition-colors duration-300 rounded-xl"
      >
        <HiOutlineMail />
        <span className="">Email</span>
      </a>
      <a
        href={contactDetails.github}
        className="flex p-2 items-center gap-4 w-64 max-[350px]:w-44 max-[350px]:justify-center border border-slate-500 hover:border-slate-300 hover:bg-slate-800/50 transition-colors duration-300 rounded-xl"
        target="_blank"
      >
        <FiGithub />
        <span className="">Github</span>
      </a>
      <a
        href={contactDetails.linkedin}
        className="flex p-2 items-center gap-4 w-64 max-[350px]:w-44 max-[350px]:justify-center border border-slate-500 hover:border-slate-300 hover:bg-slate-800/50 transition-colors duration-300 rounded-xl"
        target="_blank"
      >
        <FaLinkedinIn />
        <span className="">Linkedin</span>
      </a>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className=" p-8 text-slate-300 bg-black rounded-3xl ">
      <form
        action="https://formspree.io/f/xoeajegj"
        className="flex flex-col space-y-1.5"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="border border-slate-500 rounded-lg p-1"
          id="name"
          name="name"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="border border-slate-500 rounded-lg p-1"
          id="email"
          name="email"
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          className=" border border-slate-500 rounded-lg p-1 field-sizing-content"
          placeholder=" What's on your mind?"
        ></textarea>
        <button
          type="submit"
          className="border border-slate-500 px-8 py-1.5 rounded-lg hover:bg-black hover:text-white transition-all transform hover:scale-110 duration-300 block m-auto mt-2.5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  await fetch("https://formspree.io/f/xoeajegj", {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  });
};
