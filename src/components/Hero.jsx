import React from 'react';
import heroBg from '../assets/hero-bg.jpg'; // Add your image in assets folder
import logo from '../assets/logo.png'; // Replace with your actual logo

const Hero = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Stylish overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <img
          src={logo}
          alt="Kyara Logo"
          className="mx-auto w-28 sm:w-36 md:w-44 mb-8 drop-shadow-lg rounded-full bg-white p-2"
        />
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight drop-shadow-md">
          Refreshment,<br className="hidden sm:block" />
          <span className="text-yellow-300"> Reimagined</span>
        </h1>
        <p className="mt-4 text-white text-base sm:text-lg opacity-90">
          Millets. Fruits. Wellness in every sip.
        </p>
      </div>
    </section>
  );
};

export default Hero;
