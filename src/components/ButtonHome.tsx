import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function ButtonHome() {
  return (
    <div className="relative group">
      <a
        className="bounce flex items-center justify-center rounded-full h-14 w-14 bg-indigo-700 text-white px-5 py-2 text-6xl hover:bg-opacity-70"
        href="#"
      >
        <BsFillArrowUpCircleFill />
      </a>
      <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-white text-black text-xs rounded py-1 px-2">
        Home
      </span>
    </div>
  );
}
