import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-black">
      <div className="max-w-6xl mx-auto px-10 py-2 md:py-0">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* <!-- logo --> */}
            <div className="self-center">
              <Image
                src="/images/logo.png"
                width={50}
                height={50}
                alt="Logo JG"
              />
            </div>

            {/* <!-- nav left --> */}
          </div>

          {/* <!-- nav right --> */}
          <div className="hidden text-black font-bold md:flex items-center space-x-1">
            <a
              href="#about"
              className="text-white py-5 px-3 hover:bg-indigo-700"
            >
              ABOUT
            </a>
            <a
              href="#projects"
              className="text-white py-5 px-3 hover:bg-indigo-700"
            >
              PROJECTS
            </a>
            <a
              href="#contact"
              className="text-white py-5 px-3 hover:bg-indigo-700"
            >
              CONTACT
            </a>
          </div>

          {/* <!-- MOBILE BUTTON --> */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="mobile-menu-button text-white text-3xl"
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>

      {/* <!-- MOBILE MENU --> */}
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden bg-indigo-700`}>
        <a
          href="#about"
          className="block py-2 px-4 text-sm hover:bg-indigo-800  hover:text-white"
        >
          ABOUT
        </a>
        <a
          href="#projects"
          className="block py-2 px-4 text-sm hover:bg-indigo-800  hover:text-white"
        >
          PROJECTS
        </a>
        <a
          href="#contact"
          className="block py-2 px-4 text-sm hover:bg-indigo-800  hover:text-white"
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
}
