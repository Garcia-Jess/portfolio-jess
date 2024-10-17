import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="py-6 px-10 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* <!-- Redes Sociais --> */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            className="flex items-center justify-center rounded-full h-14 w-14 bg-indigo-700 text-white px-5 py-2 text-2xl hover:bg-opacity-70"
            href="https://www.linkedin.com/in/j%C3%A9ssica-garcia-b41854170/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="flex items-center justify-center rounded-full h-14 w-14 bg-indigo-700 text-white px-5 py-2 text-2xl hover:bg-opacity-70"
            href="https://github.com/Garcia-Jess"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="flex items-center justify-center rounded-full h-14 w-14 bg-indigo-700 text-white px-5 py-2 text-2xl hover:bg-opacity-70"
            href="https://www.behance.net/jessgarcia9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance />
          </a>
        </div>

        {/* <!-- Direitos Reservados --> */}
        <div className="text-center text-white">
          <p>© 2024 All rights reserved</p>
          <p>
            Website Made By <strong>Jess Garcia</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
