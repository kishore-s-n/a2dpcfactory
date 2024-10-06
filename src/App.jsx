import PcBuildSection from "./Components/ComponentSelector";
import ContactUs from "./Components/ContactUs";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Roadmap from "./Components/Roadmap";

const App = () => {
  return (
    <div className='bg-black w-screen'>
      <Navbar />
      <Hero />
      <Roadmap />
      <Products />
      <PcBuildSection />
      <ContactUs />
    </div>
  );
};

export default App;
