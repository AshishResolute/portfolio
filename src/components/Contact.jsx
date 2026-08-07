import { HiOutlineMail } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { contactDetails } from "../data/projects.data.js";

export const Contact = () => {
  return (
    <div className=" text-[#6b6b68]  p-8 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 border border-white">
      <ContactDivBtns/>
      <ContactForm/>
    </div>
  );
};

const ContactDivBtns = ()=>{
  return (
    <div className="space-y-4">
      <ContactSrcDivHeader />
      <ContactInlineLinks />
    </div>
  )
}




const ContactSrcDivHeader = () => {
  return (
    <div className="space-y-1">
      <h2 className="text-[#185fa5] text-2xl">Contact</h2>
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
    <div className=" space-y-3">
      <a href={contactDetails.email} className="flex p-2 items-center gap-4 border border-slate-500 " target="_blank"><HiOutlineMail/> {contactDetails.email}</a>
      <a href={contactDetails.github} className="flex p-2 items-center gap-4 border border-slate-500 " target="_blank"><FiGithub/> github/ashishResolute</a>
      <a href={contactDetails.linkedin} className="flex p-2 items-center gap-4 border border-slate-500 " target="_blank"><FaLinkedinIn/> linkedin/ashishgourh</a>
    </div>
  );
};

const ContactForm = ()=>{
  return(
    <div className="border border-white p-8">
      <form action="" className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input type="text" />
        <label htmlFor="email">Email</label>
        <input type="email" />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message">What's on your mind?</textarea>
        <input type="submit" />
      </form>
    </div>
  )
}