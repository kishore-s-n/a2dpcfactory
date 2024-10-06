import PcBuildSection from "./Components/ComponentSelector";
import ContactUs from "./Components/ContactUs";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Roadmap from "./Components/Roadmap";
import TestimonialSlider from "./Components/TestimonilaSlider";

const App = () => {
  return (
    <div className='bg-black w-screen'>
      <Navbar />
      <Hero />
      <Roadmap />
      <Products />
      <PcBuildSection />
      <TestimonialSlider />
      <ContactUs />
    </div>
  );
};

export default App;
