import Hero from "./components/Hero";
import React from "react";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact"; // Import Contact component if needed
import Navbar from "./components/Navbar"; // Import Navbar component  if needed
import "./App.css"; // Ensure you have Tailwind CSS set up in your project
// Import Tailwind CSS styles
function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="products">
        <Products />
      </section>

      <section id="contact">
        <Contact />
      </section>

    </div>
  );
}

export default App;
