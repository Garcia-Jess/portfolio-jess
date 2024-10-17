interface ButtonGoWebsiteProps {
  link: string;
}

export default function ButtonGoWebsite({ link }: ButtonGoWebsiteProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-center transition duration-500 ease-in-out hover:bg-indigo-800 transform hover:-translate-y-1 hover:scale-11 bg-indigo-700 text-white text-1xl font-bold p-2 w-full"
    >
      GO TO THE WEBSITE
    </a>
  );
}
