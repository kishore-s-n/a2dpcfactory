import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Roadmap from "./Components/Roadmap";

const App = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <Hero />
      <Roadmap />
    </div>
  );
};

export default App;
