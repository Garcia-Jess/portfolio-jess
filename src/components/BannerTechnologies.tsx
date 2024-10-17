import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoNetlify } from "react-icons/bi";
import { FaNode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { LuFigma } from "react-icons/lu";

export default function BannerTechnologies() {
  return (
    <div className="bg-indigo-700 py-10">
      <div className="flex justify-center text-2xl">
        <h1>Technologies I use</h1>
      </div>
      <div className="flex flex-wrap justify-center mt-10 space-x-6 gap-3">
        <a className="flex items-center justify-center h-8 w-10 py-0 lg:h-12 lg:w-12 text-white text-5xl hover:bg-opacity-70">
          <GrReactjs />
        </a>

        <a className="flex items-center justify-center h-8 w-10 py-0 lg:h-12 lg:w-12 text-white text-5xl hover:bg-opacity-70">
          <SiNextdotjs />
        </a>

        <a className="flex items-center justify-center h-8 w-10 lg:h-12 lg:w-12 text-white text-5xl hover:bg-opacity-70">
          <RiTailwindCssFill />
        </a>

        <a className="flex items-center justify-center h-8 w-10 lg:h-12 lg:w-12 text-white text-5xl hover:bg-opacity-70">
          <SiTypescript />
        </a>

        <a className="flex items-center justify-center h-8 w-10 lg:h-12 lg:w-12 text-white text-5xl hover:bg-opacity-70">
          <BiLogoNetlify />
        </a>

        <a className="flex items-center justify-center h-8 w-10 lg:h-12 lg:w-12 text-white text-5xl hover:bg-opacity-70">
          <FaNode />
        </a>
        <a className="flex items-center justify-center h-8 w-10 lg:h-12 lg:w-12 text-white text-5xl hover:bg-opacity-70">
          <FaGithub />
        </a>
        <a className="flex items-center justify-center h-8 w-10 lg:h-12 lg:w-12 text-white text-5xl hover:bg-opacity-70">
          <SiExpress />
        </a>
        <a className="flex items-center justify-center h-8 w-10 lg:h-12 lg:w-12 text-white text-5xl hover:bg-opacity-70">
          <LuFigma />
        </a>
      </div>
    </div>
  );
}
