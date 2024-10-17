import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroComp2 from "@/components/HeroComp2";
import BannerTechnologies from "@/components/BannerTechnologies";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Jess Garcia - Front-End Developer</title>
        <link rel="icon" href="/images/jess.png" type="image/png" />
        <meta name="description" content="Portfolio Jess Garcia." />
        <meta
          name="keywords"
          content="Front-end, React, Next, Tailwind, Web Development, Design"
        />
        <meta name="author" content="Jess Garcia" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Portfolio Jess Garcia" />
        <meta property="og:description" content="Portfolio Jess Garcia." />
        <meta property="og:image" content="/images/jess.png" />
        <meta property="og:url" content="https://www.seusite.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="">
        <HeroComp2 />
        <BannerTechnologies />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
