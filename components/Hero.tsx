const Hero = () => {
    return (
      <header className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-900">
        <h1 className="text-5xl font-bold">Hello, I'm <span className="text-blue-400">[Your Name]</span></h1>
        <p className="text-lg mt-4">I build modern web applications.</p>
        <a href="#projects" className="mt-6 px-6 py-3 bg-blue-500 rounded-lg text-lg font-semibold hover:bg-blue-600 transition">
          View My Work
        </a>
      </header>
    );
  };
  
  export default Hero;
  