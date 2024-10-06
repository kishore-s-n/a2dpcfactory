import PcBuildSection from "./Components/ComponentSelector";
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
    </div>
  );
};

export default App;
