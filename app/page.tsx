import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <div className="bg-gray-900 text-white">
        <Navbar />
        <Hero />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
