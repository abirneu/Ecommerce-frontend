import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import TopProducts from './components/TopProducts/TopProducts';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100, // Offset (in pixels) from the original trigger point
      duration: 800, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for the animation
      delay: 100, // Delay before the animation starts (in milliseconds)
    });
  AOS.refresh();
  }, []);

  return (
    <div >
      <Navbar/>
      <Hero/>
      <Products/>
      <TopProducts/>
      <Banner/>
      <Subscribe/>
      <Testimonials/>
      <Footer/>
    </div>
  );
};

export default App;