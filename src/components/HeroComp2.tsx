import Image from "next/image";
import SocialMediaHero from "@/components/SocialMediaHero";
import Link from "next/link";

export default function HeroComp() {
  return (
    <section className="text-white">
      <div className="relative w-full h-screen">
        {/* Vídeo de background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src=""
          autoPlay
          loop
          muted
        />

        {/* Conteúdo por cima do vídeo */}
        <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="mx-auto px-2 text-center">
            <h2 className="text-5xl lg:text-6xl text-sky-500 font-extrabold mb-4">
              FRONT-END DEVELOPER
            </h2>
            <p className="text-2xl mb-8 text-indigo-700 font-extrabold">
              JESS GARCIA
            </p>
            <div className="space-x-5">
              <a
                href="#projects"
                className="bg-indigo-700 text-white px-8 py-3 rounded-lg font-bold shadow-md hover:bg-indigo-900 hover:text-white"
              >
                PROJECTS
              </a>
              <Link href="/about">
                <button className="bg-gray-600 text-white px-11 py-3 rounded-lg font-bold shadow-md hover:bg-gray-800">
                  ABOUT
                </button>
              </Link>
            </div>
            <div className="flex justify-center mt-10">
              <Image
                src="/images/jess5.png"
                width={180}
                height={180}
                alt="jess"
              />
            </div>
            <SocialMediaHero />
          </div>
        </div>
      </div>
    </section>
  );
}
