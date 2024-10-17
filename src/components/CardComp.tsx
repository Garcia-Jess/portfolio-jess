import ButtonGoWebsite from "@/components/ButtonGoWebsite";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoNetlify } from "react-icons/bi";
import { FaNode } from "react-icons/fa";
import Image from "next/image";

interface CardCompProps {
  id: number;
  title: string;
  description: string;
  href: string;
  link: string;
  react: boolean;
  next: boolean;
  tailwind: boolean;
  tscript: boolean;
  netlify: boolean;
  node: boolean;
}

export default function CardComp({
  title,
  description,
  href,
  link,
  react,
  next,
  tailwind,
  tscript,
  netlify,
  node,
}: CardCompProps) {
  return (
    <div className="bg-gray-900 text-gray-400 p-6 px-10 md:px-3 mx-10 mt-10 md:mx-20 md:max-w-6xl md:flex md:justify-between rounded-lg border-2 border-gray-700 // transition duration-500 ease-in-out hover:bg-gray-900 transform hover:-translate-y-1 hover:scale-11">
      {/* <!-- Esquerda: Texto e Ícones --> */}
      <div className="md:w-1/2 px-1 md:px-10">
        <h2 className="text-xl text-indigo-700 font-bold mb-4">{title}</h2>
        <p className="text-justify">{description}</p>
        <div className="react hidden md:flex md:space-x-6 md:mt-5 lg:mt-20 md:block">
          {react ? (
            <a className="flex items-center justify-center bg-indigo-700 rounded-full h-8 w-10 lg:h-12 lg:w-12 text-black text-2xl hover:bg-opacity-70">
              <GrReactjs />
            </a>
          ) : null}
          {next ? (
            <a className="flex items-center justify-center bg-indigo-700 rounded-full h-8 w-10 lg:h-12 lg:w-12 text-black text-2xl hover:bg-opacity-70">
              <SiNextdotjs />
            </a>
          ) : null}
          {tailwind ? (
            <a className="flex items-center justify-center bg-indigo-700 rounded-full h-8 w-10 lg:h-12 lg:w-12 text-black text-2xl hover:bg-opacity-70">
              <RiTailwindCssFill />
            </a>
          ) : null}
          {tscript ? (
            <a className="flex items-center justify-center bg-indigo-700 rounded-full h-8 w-10 lg:h-12 lg:w-12 text-black text-2xl hover:bg-opacity-70">
              <SiTypescript />
            </a>
          ) : null}
          {netlify ? (
            <a className="flex items-center justify-center bg-indigo-700 rounded-full h-8 w-10 lg:h-12 lg:w-12 text-black text-2xl hover:bg-opacity-70">
              <BiLogoNetlify />
            </a>
          ) : null}
          {node ? (
            <a className="flex items-center justify-center bg-indigo-700 rounded-full h-8 w-10 lg:h-12 lg:w-12 text-black text-2xl hover:bg-opacity-70">
              <FaNode />
            </a>
          ) : null}
        </div>
      </div>

      {/* <!-- Direita: Imagem do site e botão --> */}
      <div className="mt-6 md:mt-0 md:w-1/2 pr-10 flex flex-col items-center">
        <Image
          src={href}
          width={436}
          height={300}
          alt="Hero Character"
          className="w-full"
          priority={false}
        />
        <ButtonGoWebsite link={link} />
      </div>
    </div>
  );
}
