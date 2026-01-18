import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import CourseGrid from './components/CourseGrid';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Stats />
      <About />
      <CourseGrid />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
