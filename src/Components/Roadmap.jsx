import { useEffect, useRef, useState } from "react";

const Roadmap = () => {
  const [fillHeight, setFillHeight] = useState(0);
  const sectionRef = useRef(null); // Create a ref for the target section

  const handleScroll = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate the scroll position relative to the section
      const sectionTop = rect.top; // The top of the section
      const sectionHeight = rect.height; // The height of the section

      // Calculate how much of the section is scrolled into view
      const scrolled =
        Math.max(0, Math.min(1, (windowHeight - sectionTop) / sectionHeight)) *
        100;
      setFillHeight(scrolled);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className='roadmap-container mx-auto w-screen bg-white py-16'>
      <div className='absolute left-1/2 transform -translate-x-1/2 h-screen w-3 bg-black'>
        <div
          className='bg-yellow-500 w-full'
          style={{ height: `${fillHeight}%` }}></div>
      </div>

      <div
        className='flex items-center justify-start w-full mb-12'
        ref={sectionRef}>
        <div className='w-1/2 pr-8'>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h3 className='text-2xl font-semibold mb-2'>
              Requirement Analysis
            </h3>
            <p className='text-gray-600'>
              Discuss your needs and budget. Our experts help you define the
              perfect specs for your dream PC.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 - Right Aligned */}
      <div className='flex items-center justify-end w-full mb-12'>
        <div className='w-1/2 pl-8'>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h3 className='text-2xl font-semibold mb-2'>Component Selection</h3>
            <p className='text-gray-600'>
              We handpick top-quality parts that match your requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 - Left Aligned */}
      <div className='flex items-center justify-start w-full mb-12'>
        <div className='w-1/2 pr-8'>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h3 className='text-2xl font-semibold mb-2'>Expert Assembly</h3>
            <p className='text-gray-600'>
              Our skilled technicians meticulously build your PC for a flawless
              setup.
            </p>
          </div>
        </div>
      </div>

      {/* Card 4 - Right Aligned */}
      <div className='flex items-center justify-end w-full mb-12'>
        <div className='w-1/2 pl-8'>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h3 className='text-2xl font-semibold mb-2'>High-End Testing</h3>
            <p className='text-gray-600'>
              We put your new PC through high-end benchmarks and stress tests.
            </p>
          </div>
        </div>
      </div>

      {/* Card 5 - Left Aligned */}
      <div className='flex items-center justify-start w-full mb-12'>
        <div className='w-1/2 pr-8'>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h3 className='text-2xl font-semibold mb-2'>Secure Delivery</h3>
            <p className='text-gray-600'>
              Your custom-built PC is carefully packaged and shipped to your
              doorstep, ready for use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
