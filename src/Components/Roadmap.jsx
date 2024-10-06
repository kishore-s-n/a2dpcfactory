import { useEffect, useRef } from "react";
import assemblyImg from "../assets/assembly.png";
import componentsImg from "../assets/components.png";
import deliveryImg from "../assets/delivery.png";
import requirementsImg from "../assets/requirements.png";
import testingImg from "../assets/testing.png";

const Roadmap = () => {
  const roadmapRef = useRef(null);

  // Animation effect for cards
  useEffect(() => {
    const cards = document.querySelectorAll(".roadmap-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-showCard");
            const line = document.querySelector(".roadmap-line");
            line.classList.add("line-grow"); // Animate the line when a card is shown
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div
      className=' relative min-h-screen bg-gray-100 overflow-hidden'
      id='whyus'>
      {/* Heading */}
      <h2 className='font-clash underline decoration-yellow-600 text-4xl md:text-5xl font-bold text-center text-black pt-20 mb-16 md:mb-20'>
        Why Us
      </h2>

      {/* Roadmap Container */}
      <div
        ref={roadmapRef}
        className='relative flex flex-col items-center px-4 space-y-14 md:space-y-20'>
        <div className='relative space-y-16 w-full max-w-lg md:max-w-3xl'>
          {/* Step 1 - Mobile First, Left Image */}
          <div className='flex flex-col items-center opacity-0 roadmap-card transition-all duration-700 md:flex-row md:space-x-8 animate-slide-in-left'>
            <img
              src={requirementsImg} // Change to your image path
              alt='Requirement Analysis'
              className='w-full h-auto max-w-xs object-cover mb-6 md:mb-0 rounded-lg transition-all duration-300'
            />
            <div className='roadmap-card bg-white rounded-lg shadow-lg p-6 md:p-8 w-full max-w-md'>
              <div className='flex items-center mb-4'>
                <span className='text-3xl md:text-4xl mr-3'>📝</span>
                <h3 className='text-xl md:text-3xl font-semibold'>
                  Requirement Analysis
                </h3>
                <span className='bg-yellow-600 p-4 text-sm md:text-lg font-bold absolute top-0 right-0 rounded-l-full text-white'>
                  1
                </span>
              </div>
              <p className='text-gray-700 mb-4'>
                Discuss your needs and budget. Our experts help you define the
                perfect specs for your dream PC.
              </p>
              <p className='text-gray-600'>
                We assess your preferences to ensure the ideal components are
                selected for your specific needs.
              </p>
            </div>
          </div>

          {/* Step 2 - Mobile First, Right Image */}
          <div className='flex flex-col items-center  opacity-0 roadmap-card transition-all duration-700 md:flex-row-reverse md:space-x-8 animate-slide-in-right'>
            <img
              src={componentsImg} // Change to your image path
              alt='Component Selection'
              className='w-full h-auto max-w-xs object-cover mb-6 md:mb-0 rounded-lg'
            />
            <div className='roadmap-card bg-white rounded-lg shadow-lg p-6 md:p-8 w-full max-w-md'>
              <div className='flex items-center justify-end ml-5 mb-4'>
                <span className='text-3xl md:text-4xl mr-3'>🔧</span>
                <h3 className='text-xl md:text-3xl font-semibold'>
                  Component Selection
                </h3>
                <span className='absolute top-0 left-0 bg-yellow-600 p-4 text-sm md:text-lg rounded-r-full text-white font-bold'>
                  2
                </span>
              </div>
              <p className='text-gray-700 mb-4'>
                We handpick top-quality parts that match your requirements,
                ensuring optimal performance.
              </p>
              <p className='text-gray-600'>
                Our team evaluates each component for performance,
                compatibility, and value.
              </p>
            </div>
          </div>

          {/* Step 3 - Mobile First, Left Image */}
          <div className='flex flex-col items-center opacity-0 roadmap-card transition-all duration-700 md:flex-row md:space-x-8 animate-slide-in-left'>
            <img
              src={assemblyImg} // Change to your image path
              alt='Expert Assembly'
              className='w-full h-auto max-w-xs object-cover mb-6 md:mb-0 rounded-lg'
            />
            <div className='roadmap-card bg-white rounded-lg shadow-lg p-6 md:p-8 w-full max-w-md'>
              <div className='flex items-center mb-4'>
                <span className='text-3xl md:text-4xl mr-3'>💻</span>
                <h3 className='text-xl md:text-3xl font-semibold'>
                  Expert Assembly
                </h3>
                <span className='absolute top-0 right-0 bg-yellow-600 p-4 text-sm md:text-lg rounded-l-full text-white font-bold'>
                  3
                </span>
              </div>
              <p className='text-gray-700 mb-4'>
                Our skilled technicians meticulously build your PC, ensuring a
                flawless setup.
              </p>
              <p className='text-gray-600'>
                Every build is executed with precision for optimal performance
                and reliability.
              </p>
            </div>
          </div>

          {/* Step 4 - Mobile First, Right Image */}
          <div className='flex flex-col items-center opacity-0 roadmap-card transition-all duration-700 md:flex-row-reverse md:space-x-8 animate-slide-in-right'>
            <img
              src={testingImg} // Change to your image path
              alt='High-End Testing'
              className='w-full h-auto max-w-xs object-cover mb-6 md:mb-0 rounded-lg'
            />
            <div className='roadmap-card bg-white rounded-lg shadow-lg p-6 md:p-8 w-full max-w-md'>
              <div className='flex items-center justify-end mb-4'>
                <span className='text-3xl md:text-4xl mr-3'>🔬</span>
                <h3 className='text-xl md:text-3xl font-semibold'>
                  High-End Testing
                </h3>
                <span className='absolute top-0 left-0 bg-yellow-600 p-4 text-sm md:text-lg rounded-r-full text-white font-bold'>
                  4
                </span>
              </div>
              <p className='text-gray-700 mb-4'>
                We put your new PC through high-end benchmarks and stress tests
                for reliability.
              </p>
              <p className='text-gray-600'>
                Our testing procedures meet stringent quality standards.
              </p>
            </div>
          </div>

          {/* Step 5 - Mobile First, Left Image */}
          <div className='flex flex-col items-center opacity-0 roadmap-card transition-all duration-700 md:flex-row md:space-x-8 animate-slide-in-left'>
            <img
              src={deliveryImg} // Change to your image path
              alt='Secure Delivery'
              className='w-full h-auto max-w-xs object-cover mb-6 md:mb-0 rounded-lg'
            />
            <div className='roadmap-card bg-white rounded-lg shadow-lg p-6 md:p-8 w-full max-w-md'>
              <div className='flex items-center mb-4'>
                <span className='text-3xl md:text-4xl mr-3'>📦</span>
                <h3 className='text-xl md:text-3xl font-semibold'>
                  Secure Delivery
                </h3>
                <span className='absolute top-0 right-0 bg-yellow-600 p-4 text-sm md:text-lg rounded-l-full text-white font-bold'>
                  5
                </span>
              </div>
              <p className='text-gray-700 mb-4'>
                Your custom-built PC is securely packaged and shipped to your
                doorstep.
              </p>
              <p className='text-gray-600'>
                We ensure your system arrives safely, fully assembled, and ready
                to use.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Empty space at the top for scrolling */}
      <div className='h-20 md:h-32'></div>
    </div>
  );
};

export default Roadmap;
