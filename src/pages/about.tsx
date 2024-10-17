import ButtonHome from "@/components/ButtonHome";
import Footer from "@/components/Footer";
import Link from "next/link";

import TitleCard from "@/components/TitleCard";

export default function About() {
  return (
    <>
      <div id="about" className="mx-auto max-w-3xl mt-20 flex space-x-20">
        <TitleCard title={"ABOUT"} />
        <Link href="/">
          <ButtonHome />
        </Link>
      </div>
      <div className="md:mx-auto md:flex md:justify-between gap-5 max-w-3xl px-2 md:px-20 lg:mt-10 mx-9 mt-10">
        <div className="rounded-lg border-2 border-gray-700 mt-5 lg:block lg:flex">
          <p className="p-7 text-justify text-gray-400 leading-8">
            Hi! My name is Jessica, and I’m a passionate educator and developer
            with a deep love for languages and technology. I hold a degree in
            French Literature from the Federal University of Pará (UFPA), where
            I discovered my fascination with languages, culture, and teaching.
            Currently, I’m pursuing a degree in Systems Analysis and Development
            at UNAMA, as part of my journey to combine my background in
            languages with my growing interest in programming and data analysis.
            <br />
            <br />
            For over 8 years, I have worked as a French and English teacher,
            with experience at institutions in Brazil and Chile. I’ve taught
            students of all levels and ages, both in classrooms and through
            private lessons. My teaching approach focuses on making language
            learning enjoyable and accessible, helping students reach their
            personal and professional goals.
            <br />
            <br /> In the tech world, I’ve been developing my skills in web
            development using React, Next.js, Tailwind CSS, and other
            technologies. My true passion lies in front-end design, where I
            enjoy creating engaging, user-friendly interfaces. I’m always
            exploring new tools and frameworks to enhance my skills, and I love
            the process of bringing creative ideas to life through coding.
            <br />
            <br /> More recently, I’ve been diving into the field of Natural
            Language Processing (NLP) with Python, combining my love for
            languages and technology. I’m particularly interested in how data
            analysis and NLP can improve language learning and other educational
            experiences. While I’m still building my expertise, I’m eager to
            explore this intersection further and apply these tools to create
            innovative solutions.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
