import { HiOutlineMail } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { contactDetails } from "../data/projects.data.js";

export const Contact = () => {
  return (
    <div className=" text-[#6b6b68] space-y-4 p-8 pt-6">
      <ContactSrcDivHeader />
      <ContactInlineLinks />
    </div>
  );
};

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
      <a href={contactDetails.email} className="flex p-2 items-center gap-4 border border-white " target="_blank"><HiOutlineMail/> {contactDetails.email}</a>
      <a href={contactDetails.github} className="flex p-2 items-center gap-4 border border-white " target="_blank"><FiGithub/> github/ashishResolute</a>
      <a href={contactDetails.linkedin} className="flex p-2 items-center gap-4 border border-white " target="_blank"><FaLinkedinIn/> linkedin/ashishgourh</a>
    </div>
  );
};
